import classNames from 'classnames';
import {Link} from 'react-router-dom';

interface HeaderProps{
    secondary?: boolean;
}

const Header = ({secondary}:HeaderProps) => {
    return(
        <header className={classNames(secondary ? "absolute top-0" : "", "w-full px-7 pt-18")}>
            {secondary ? 
                <Link to="/" className="hover:opacity-70 transition duration-300">
                    <span className="text-black text-2md leading-7 font-semibold">Your Logo</span>
                </Link>
            :
                <div className="flex justify-between w-full absolute">
                    <Link to="/"></Link>
                </div>
            }
            
        </header>
    )
}

export default Header; 