import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import SignUpForm from './SignupForm';



function SignupPage(){
    
    const navigate = useNavigate();

    return (
        <div>
            <div className="container-fluid">
                <div className="row vh-100">
                    {/* Left Half - Signup */}
                    <div className="col-md-6 d-flex align-items-center
                    justify-content-center bg-primary">
                        <div className='w-75'>
                            <h2 className='mb-4 fw-bold text-white'>Sign Up</h2>
                            <SignUpForm />
                        </div>
                        
                    </div>

                    {/* Right Half - Sign Up Prompt */}
                    <div className="col-md-6 d-flex flex-column align-items-center justify-content-center bg-white text-white text-center">
                    <h3 className="fw-bold mb-3 text-primary">Sign in here...</h3>
                    <p className="mb-4 text-primary">Sign in if you already have an account!</p>
                    <button className="btn btn-primary" onClick={() => navigate('/')}>
                        Sign In
                    </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SignupPage;