import { useState } from "react";
import LoginForm from "../loginForm"
import LoginSide from "../loginSide"

const FormContainer = () => {

  const [registerForm, setRegisterForm] = useState(false);

    return (
      <>
        <div className="mx-auto xl:container xl:flex xl:items-center xl:h-screen">
          <div className="mobile-md:max-w-[375px] w-full md:max-w-[476px] px-7 mobile-xl:mx-auto mobile-xl:mt-100">
            <h2 className="text-black text-lg leading-normal font-medium mb-22">
              Sign {registerForm ? 'up' : 'in'}
            </h2>
            <p className="text-base leading-normal text-black font-normal">
              {registerForm ? 'If you already have an account' : 'If you don’t have an account registered'}
              <br />
              You can{" "}
              <span className="text-blue font-semibold cursor-pointer hover:opacity-75 transition-opacity duration-300" onClick={() => setRegisterForm(!registerForm)}>
                {!registerForm ? 'Register' : 'Login'} here !
              </span>
            </p>

            <LoginForm registerForm={registerForm}/>

          </div>
        </div>

        <LoginSide />
      </>
    );
}

export default FormContainer;