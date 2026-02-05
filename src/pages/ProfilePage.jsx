import { useParams } from "react-router-dom";
import Menu from "../components/Menu";

const ProfilePage = () => {

    let {facebook,youtube} = useParams();

    return (
        <div>
            <Menu></Menu>

            <p>Facebook: {facebook}</p>
            <p>YouTube: {youtube}</p>
            
            This is Profile page
        </div>
    );
};

export default ProfilePage;