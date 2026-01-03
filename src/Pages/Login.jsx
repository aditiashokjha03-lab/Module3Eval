import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState=('');
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault ();

        const role = login(email, password);

        if (role === 'admin') {
            navigate('/admin/dashboard');
        } else if (role === 'customer') {
            navigate('/customers/dashboard');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <button type="submit">Login</button>
            </form>
            <div style={{marginTop:'20px', fontSize:'12px', color:'#666'}}>
                <p><strong>Valid Credentials:</strong></p>
                <p>Admin: admingmail.com / admin1234</p>
                <p>Customer: customer@gmail.com / customer1234</p>
            </div>
        </div>
    );
};

export default Login;