import LoginInput from "../loginInput"
import { login, signup, useAuth } from '../../firebase';
import { useSelector } from "react-redux";
import { RootState } from '../../app/store';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

interface LoginFormProps{
    registerForm?: boolean;
}

const LoginForm = ({registerForm}:LoginFormProps) => {

    const [loading, setLoading] = useState(false);

    const email = useSelector((state: RootState) => state.login.email);
    const password = useSelector((state: RootState) => state.login.password);
    const passwordConfirm = useSelector((state: RootState) => state.login.passwordConfirm);
    const currentUser = useAuth();

    let navigate = useNavigate();

    async function handleLogin() {
        try{
            await login(email, password)
        } catch {
            alert("Either you're already logged in or email or password is wrong");
        }
    }

    async function handleSignUp() {
        setLoading(true);
        if(password === passwordConfirm){
            try{
                await signup(email, password)
            } catch {
                alert("Either you're already logged in or email or password is wrong")
            }
        } else{
            alert("passwords are not matching")
        }
        
        setLoading(false);
    }

    useEffect(() => {
        if(currentUser){
            navigate('/profile', {replace: true});
        }
    }, [currentUser])

    return(
        <div className="mt-52">
            <LoginInput variant="email" className="mb-10 lg:mb-12" />
            <LoginInput variant="password" className={registerForm ? "mb-10 lg:mb-12" : ''} />
            {registerForm && <LoginInput variant="passwordConfirm" /> }
            
            <button 
                onClick={registerForm ? handleSignUp : handleLogin} 
                disabled={loading}
                className="mt-60 w-full text-center text-white text-md py-3.5 bg-blue rounded-32 shadow-2md hover:scale-105 transition-scale duration-300"
            >
                {registerForm ? 'Register' : 'Login'} 
            </button>
            {!registerForm && 
                <>
                    <span className="inline-block w-full text-center mt-42 mb-6 text-base font-medium text-gray-100">
                        or continue with
                    </span>

                    <div className="flex items-center justify-center gap-4 w-full">
                        <img src="images/facebook-login.svg" />
                        <img src="images/google-login.svg" />
                    </div> 
                </>
            }
            
        </div>
    )
}

export default LoginForm;