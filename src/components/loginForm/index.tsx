import LoginInput from "../loginInput"
import styles from './styles.module.scss';

const LoginForm = () => {
    return(
        <form action="" className="mt-52">
            <LoginInput variant="username" className="mb-10 lg:mb-12" />
            <LoginInput variant="password" />
            <div className="mt-4 flex items-center">
                <input type="checkbox" className="cursor-pointer w-3.5 h-3 lg:w-4 lg:h-4" />
                <span className="pl-2.5 font-light text-xs leading">Remember me</span>
            </div>

            <button className="mt-60 w-full text-center text-white text-md py-3.5 bg-blue rounded-32 shadow-2md hover:scale-105 transition-scale duration-300">Login</button>
        </form>
    )
}

export default LoginForm;