import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './SignupForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import React, {useState} from 'react';
import axios from 'axios';

const SignUpForm = () =>{
    
    {/* Initialized user */}

    const [user, setUser] = useState({
            name: '',
            email: '',
            password: '',
            city: '',
            pin: '',
            address: ''
        });

    {/* signup form validation  */}
    const signupValidation = () =>{
        if(!user.name ){
            toast.error("Enter user Name!");
            return false;
        }
        if(!user.email ){
            toast.error("Enter user Email!");
            return false;
        }
        if(!user.password ){
            toast.error("Enter user Password!");
            return false;
        }

        return true;

    }

    const handleChange = async (e) =>{
        const {id, value} = e.target;
        setUser((prevUser) =>({
            ...prevUser,
            [id]:value
        }));
    };

    const handleSubmit = async (e) => {
        console.log("handleSubmit click");
        e.preventDefault();

        if (signupValidation()) {
            console.log('Submitting user:', user.name, user.email, user.city);

            try {
                const resp = await axios.post("http://localhost:8089/signup", user);
                console.log("User registered successfully:", resp.data);
            } catch (error) {
                if (error.response) {
                    console.error("Signup failed:", error.response.status, error.response.data);
                } else if (error.request) {
                    console.error("No response from server:", error.request);
                } else {
                    console.error("Error during signup:", error.message);
                }
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
            {['name', 'email', 'password', 'city', 'pin', 'address'].map((field) => (
                <div className={`${styles.customFormGroup} form-group`} key={field}>
                    <input
                        type={field === 'password' ? 'password' : 'text'}
                        className="form-control"
                        id={field}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        value={user[field]}
                        onChange={handleChange}
                    />

                </div>
            ))};

            <button type="submit" className="btn btn-light w-100 mb-3">
                Signup <span className="ms-2">→</span>
            </button>
            <ToastContainer position="top-right" autoClose={3000} />
        </form>
        </>
    );
};

export default SignUpForm;