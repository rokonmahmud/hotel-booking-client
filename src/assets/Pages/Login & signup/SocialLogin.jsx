import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext);
    const nevigate = useNavigate();
    const handleGooleLogin = () =>{
        googleLogin()
        .then(result => {
            console.log(result.user);
            nevigate('/');

        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <button onClick={handleGooleLogin} className="btn">
                Sign In With Google
            </button>
        </div>
    );
};

export default SocialLogin;