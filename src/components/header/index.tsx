import classNames from 'classnames';

interface HeaderProps{
    secondary?: boolean;
}

const Header = ({secondary}:HeaderProps) => {
    return(
        <header className={classNames(secondary ? "absolute top-0" : "", "w-full px-7 pt-18")}>
            <a href="/" className="hover:opacity-70 transition duration-300">
                <span className="text-black text-2md leading-7 font-semibold">Your Logo</span>
            </a>
        </header>
    )
}

export default Header; 