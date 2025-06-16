import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



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
                            <h2 className='mb-4 fw-bold'>Sign Up</h2>
                        </div>

                        <input type="text" 
                                className="form-control" 
                                placeholder="Name" 
                                />
                       
                       <input type="email" className="form-control" 
                                placeholder="email" />

                        <input type="password" className="form-control" 
                                placeholder="Password" />

                        <input type="text" className="form-control" 
                                placeholder="City" />

                        <button className="btn btn-light w-100 mb-3">
                            Signup <span className="ms-2">→</span>
                        </button>

                    </div>

                    {/* Right Half - Sign Up Prompt */}
                    <div className="col-md-6 d-flex flex-column align-items-center justify-content-center bg-white text-white text-center">
                    <h3 className="fw-bold mb-3">Signin here...</h3>
                    <p className="mb-4">Sign up and discover a great amount of new opportunities!</p>
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