import LoginForm from "../loginForm"
import LoginSide from "../loginSide"

const FormContainer = () => {
    return (
      <>
        <div className="mx-auto xl:container xl:flex xl:items-center xl:h-screen">
          <div className="mobile-md:max-w-[375px] w-full md:max-w-[476px] px-7 mobile-xl:mx-auto mobile-xl:mt-100">
            <h2 className="text-black text-lg leading-normal font-medium mb-22">
              Sign in
            </h2>
            <p className="text-base leading-normal text-black font-normal">
              If you don’t have an account registered <br />
              You can{" "}
              <span className="text-blue font-semibold">
                Register NOWHERE !
              </span>
            </p>

            <LoginForm />

            <span className="inline-block w-full text-center mt-42 mb-6 text-base font-medium text-gray-100">
              or continue with
            </span>

            <div className="flex items-center justify-center gap-4 w-full">
              <img src="images/facebook-login.svg" />
              <img src="images/google-login.svg" />
            </div>
          </div>
        </div>

        <LoginSide />
      </>
    );
}

export default FormContainer;