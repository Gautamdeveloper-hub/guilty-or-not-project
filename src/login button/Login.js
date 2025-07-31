import { useState, useEffect } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import './Login.css';

function Login() {
  const [value, setvalue] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setvalue(prev => ({ ...prev, email: savedEmail }));
      setRememberMe(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setvalue(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e) => {
    setRememberMe(e.target.checked);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const validate = () => {
    const newErrors = {};

    if (!value.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(value.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!value.password) {
      newErrors.password = "Password is required";
    } else if (value.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {  
      alert("Please fix the errors before submitting.");
      return;
    }

    if (rememberMe) {
      localStorage.setItem('rememberedEmail', value.email);  // locally store gareko
    } else {
      localStorage.removeItem('rememberedEmail');
    }

    console.log("Form Submitted:", value, "Remember me:", rememberMe);
    alert("Login successful!");
  };

  return (
    <div className="container">
      
        <h2>Welcome back to Guilty or Not</h2>
        <p>Are you ready to access our service?</p>
    
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={value.email}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                value={value.password}
              />
              <button type="button" className="eye-button" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={handleCheckbox}
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="btn">Login</button>

          <div className="form-footer">
            <p className="forgot-password"><a href="/">Forgot Password?</a></p>
            <p className="create-account">Don't have an account? <a href="/">Create Account</a></p>
            <p className="terms">
              By logging in, you agree to our <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

// /*
// /* Container styling */
// .container {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   min-height: 100vh;
//   background: #278b85;
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   padding: 20px;
//   color: #fff;
// }


// .app {
//   text-align: center;
//   margin-bottom: 20px;
// }

// h1 {
//   font-size: 2rem;
//   margin-bottom: 0.5rem;
//   color: #00ffaa;
// }

// .app p {
//   font-size: 1rem;
//   color: #e2dada;
// }


// .form-container {
//   background-color: #15157a;
//   padding: 30px;
//   border-radius: 10px;
//   width: 100%;
//   max-width: 400px;
//   box-shadow: 0 0 10px rgba(0, 255, 170, 0.2);
// }


// .form-group {
//   margin-bottom: 20px;
// }

// .form-group label {
//   display: block;
//   margin-bottom: 6px;
//   font-weight: 500;
// }

// .form-group input[type="text"],
// .form-group input[type="password"] {
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #444;
//   border-radius: 5px;
//   background: #474788;
//   color: #fff;
// }

// .password-wrapper {
//   display: flex;
//   align-items: center;
//   position: relative;
// }

// .password-wrapper input {
//   width: 100%;
//   padding-right: 40px;
// }

// .eye-button {
//   position: absolute;
//   right: 10px;
//   background: none;
//   border: none;
//   color: #aaa;
//   cursor: pointer;
//   font-size: 1.2rem;
// }


// .checkbox-group {
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   margin-bottom: 20px;
// }

// .checkbox-group input[type="checkbox"] {
// color: #00ffaa;
//   width: 18px;
//   height: 18px;
// }


// .btn {
//   width: 100%;
//   padding: 12px;
//   background-color: #00ffaa;
//   border: none;
//   border-radius: 5px;
//   font-weight: bold;
//   color: #1e1e2f;
//   cursor: pointer;
//   transition: background 0.3s ease;
// }

// .btn:hover {
//   background-color: #00ddaa;
// }


// .error {
//   color: #fa7878;
//   font-size: 0.9rem;
//   margin-top: 4px;
//   display: block;
// }


// .form-footer {
//   margin-top: 20px;
//   font-size: 0.9rem;
//   text-align: center;
// }

// .form-footer a {
//   color: #00ffaa;
//   text-decoration: none;
// }

// .form-footer a:hover {
//   text-decoration: underline;
// }

// .forgot-password,
// .create-account,
// .terms {
//   margin: 8px 0;
// }


// @media (max-width: 480px) {
//   .form-container {
//     padding: 20px;
//   }

//   .app h1 {
//     font-size: 1.5rem;
//   }
// }

// */