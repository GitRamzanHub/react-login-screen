import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate  } from "react-router-dom";

function SignupPage(){
    
    const navigate = useNavigate();

    return (
        <div>
            <h1>This is my Signup page</h1>
            <button className="btn btn-light" onClick={() => navigate("/")}>
                Sign-in
            </button>
        </div>
    );
}

export default SignupPage;