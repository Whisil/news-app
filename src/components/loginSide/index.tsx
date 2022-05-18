
const LoginSide = () => {
    return(
        <div className="hidden xl:block w-full max-w-[735px] h-screen absolute top-0 right-0 p-22">
          <div className="bg-black-100 w-full h-full rounded-2xl">
            <a href="tel:+940116789754" className="flex items-center justify-end text-white text-2sm py-6 pr-8">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block mr-1.5"
              >
                <path
                  d="M13.6189 10.2746L11.6652 8.32085C10.9674 7.62308 9.7812 7.90221 9.50209 8.80928C9.29276 9.4373 8.595 9.78618 7.96701 9.6466C6.57148 9.29772 4.68751 7.48353 4.33863 6.01822C4.1293 5.39021 4.54796 4.69244 5.17595 4.48314C6.08304 4.20403 6.36215 3.01783 5.66439 2.32007L3.71064 0.366327C3.15243 -0.122109 2.31511 -0.122109 1.82668 0.366327L0.500926 1.69208C-0.824827 3.08761 0.640479 6.78576 3.91997 10.0653C7.19947 13.3448 10.8976 14.8799 12.2931 13.4843L13.6189 12.1586C14.1074 11.6003 14.1074 10.763 13.6189 10.2746Z"
                  fill="white"
                />
              </svg>
              +94 0116 789 754
            </a>

            <img src="images/login-illu.png" alt="man sitting at the desk" className="mx-auto mb-20"/>

            <div className="mx-24">
                <h1 className="text-xl text-white font-semibold mb-1">Sign Up to name</h1>
                <p className="text-3md text-white font-light">Lorem Ipsum is simply </p>
            </div>
            
          </div>
        </div>
    )
}

export default LoginSide;