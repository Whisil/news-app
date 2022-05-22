import { useEffect } from "react";
import { useAuth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from '../../app/store';
import Header from "../../components/header";

const Profile = () => {

    const navigate = useNavigate();
    const currentUser = useAuth();

    const currentUserData = useSelector((state: RootState) => state.login.currentUser);

    useEffect(() => {
        if(currentUser.email === undefined){
            navigate('/login', {replace: true});
        }
        console.log(currentUserData)
    }, [])

    return(
        <>
            <Header newsBtn />
            <div className="container mt-10 px-4 mx-auto flex mobile-md:flex-col items-center">
                <div className="w-32 h-32">
                    <img src={currentUserData.photo ? currentUserData.photo : "/images/avatar-placeholder.png"} alt="Avatar" className="border-blue border-2 rounded-full w-full" />
                </div>
                <div className="flex justify-center flex-col sm:ml-4 mobile-md:mt-4">
                    <span>Your Name is - {currentUserData.name ? currentUserData.name : "Nobody knows you =["}</span>
                    <span>And here's your email - {currentUserData.email ? currentUserData.email : "weDontKnow@gmail.com"}</span>
                </div>
            </div>
        </>
    )
}

export default Profile;