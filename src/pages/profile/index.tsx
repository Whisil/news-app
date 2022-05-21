import { useEffect } from "react";
import { useAuth } from '../../firebase';
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    const navigate = useNavigate();
    const currentUser = useAuth();

    useEffect(() => {
        if(!currentUser){
            navigate('/login', {replace: true});
        }
    }, [])

    return(
        <>
            
        </>
    )
}

export default Profile;