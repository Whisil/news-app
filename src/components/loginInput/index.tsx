import classNames from 'classnames';
import { useState } from 'react';

import styles from './styles.module.scss';

interface LoginInput {
    variant: "password" | "username";
    className?: string;
}


const LoginInput = ({variant, className}:LoginInput) => {

    const [inputActive, setInputActive] = useState(false);

    return(
        <div className={classNames(className, "w-full")}>
            <div className="block mb-3 text-sm text-gray leading-normal font-medium">
                {
                    variant === "password" ? 'Password' : 
                    variant === "username" ? "Username" : 
                    null
                }
            </div>

            <div className="">
                <label className={classNames(styles.inputLabel ,"flex items-center")}>
                    <img src={`images/input-${variant === 'password' ? 'password' : 'username'}.svg`} className="mr-2" />
                    <input 
                        className='flex-1 outline-none text-black-100' 
                        type="email" 
                        placeholder={`Enter your ${variant === "password" ? 'password' : 'username'}`} 
                        onFocus={() => setInputActive(true)}
                        onBlur={() => setInputActive(false)}
                    />
                    {variant === 'password' && <img src="images/input-show.svg" />}
                </label>

                <div className={`block mt-2 w-full h-0.5 transition duration-300 ${inputActive ? 'bg-black-100' : 'bg-gray-300'}`} />
            </div>
            
        </div>
    )
}

export default LoginInput;