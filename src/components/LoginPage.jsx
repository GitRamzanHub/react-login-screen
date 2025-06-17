import React, {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate  } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Login.module.css';

function App() {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const validation = () =>{

    if(!email.trim()){
      toast.error("Please select the email first!");
      return;
    }

    if(!password.trim()){
      toast.error("Please enter the user password!");
      return;
    }
    
  };


  return (


    <div className="container-fluid">
      <div className="row vh-100">
        
        {/* Left Half - Login */}
        <div className="col-md-6 d-flex align-items-center justify-content-center bg-white">
          <div className="w-75">

            <h2 className="mb-4 fw-bold">Welcome back</h2>

            <div className="mb-3 input-group">
              <span className="input-group-text bg-white">
                <i className="bi bi-envelope text-muted"></i>
              </span>
              <input type="email" 
                    className="form-control" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3 input-group">
              <span className="input-group-text bg-white">
                <i className="bi bi-lock text-muted"></i>
              </span>
              <input type={showPassword ? "text" : "password"} className="form-control" 
                     value={password}
                     onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              <span className="input-group-text bg-white" onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}>
                <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
              </span>
            </div>

            <button className="btn btn-primary w-100 mb-3" onClick={validation}>
              Sign In <span className="ms-2">→</span>
            </button>
            <ToastContainer position="top-right" autoClose={3000} />

            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-outline-secondary rounded-circle" style={{borderColor: '#0d6efd'}}>
                  <i className="bi bi-github"></i>
              </button>
              <button className="btn btn-outline-secondary rounded-circle" style={{borderColor: '#0d6efd'}}>
                  <i className="bi bi-twitter" style={{ color: '#1DA1F2' }}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Right Half - Sign Up Prompt */}
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center bg-primary text-white text-center">
          <h3 className="fw-bold mb-3">Signup here...</h3>
          <p className="mb-4">Sign up and discover a great amount of new opportunities!</p>
           <button className="btn btn-light" onClick={() => navigate('/signup')}>
             Sign Up
           </button>
        </div>
      </div>
    </div>
  );
}

export default App;
