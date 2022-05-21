import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeEmail, changePassword, changePasswordConfirm } from '../../slices/loginSlice';

interface LoginInput {
    variant: "password" | "passwordConfirm" | "email";
    className?: string;
}


const LoginInput = ({variant, className}:LoginInput) => {

    const [inputActive, setInputActive] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState('text');

    const dispatch = useDispatch();

    useEffect(() => {
        if(variant === "passwordConfirm" || variant === "password"){
            if(showPassword){
                setInputType('text')
            } else {
                setInputType('password')
            }
        }
    }, [showPassword])


    return(
        <div className={classNames(className, "w-full")}>
            <div className="block mb-3 text-sm text-gray leading-normal font-medium">
                {
                    variant === "password" ? 'Password' : 
                    variant === "email" ? "Username" : 
                    variant === "passwordConfirm" ? "Confirm Password" :
                    null
                }
            </div>

            <label className={"flex items-center"}>
                <img src={`images/input-${variant === 'password' || variant === 'passwordConfirm' ? 'password' : 'username'}.svg`} className="mr-2" />
                <input 
                    className='flex-1 outline-none text-black-100' 
                    type={variant === "email" ? "email" : inputType}
                    placeholder={`${variant === "passwordConfirm" ? "Confirm" : "Enter"} your ${variant === "password" ? 'password' : variant === 'email' ? 'email' : 'password'}`} 
                    onFocus={() => setInputActive(true)}
                    onBlur={() => setInputActive(false)}
                    onChange={(e) => variant === 'password' ? dispatch(changePassword(e.target.value) || '') : variant === "email" ? dispatch(changeEmail(e.target.value) || '') : variant === "passwordConfirm" ? dispatch(changePasswordConfirm(e.target.value) || '') : null}
                />
                {variant === 'password' || variant === 'passwordConfirm' ? <img src="images/input-show.svg" className="cursor-pointer" onClick={() => setShowPassword(!showPassword)} /> : null}
            </label>

            <div className={`block mt-2 w-full h-0.5 transition duration-300 ${inputActive ? 'bg-black-100' : 'bg-gray-300'}`} />
            
        </div>
    )
}

export default LoginInput;