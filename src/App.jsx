import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";
import Login from "./Pages/Login";
import AdminDashboard from './Pages/AdminDashboard';
import CustomerDashboard from './Pages/CustomerDashboard';
import UpdatePage from './Pages/UpdatePage'

const PrivateRoute = ({children, allowedRole }) => {
  const {user} = useAuth();

  if(!user) {
    return <Navigate to="/" />;
  }
  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to={user.role === 'admin'? '/admin/dashboard': '/customers/dashboard'} />;
  }
  return children;
};

function App() {
    return (
      <div className="App">
        <Routes>
            <Route path="/" element={<Login />} />
            
            <Route path="/admin/dashboard" element = {
                <PrivateRoute allowedRole="admin">
                    <AdminDashboard />
                </PrivateRoute>
            }/>

            <Route path="/admin/restaurants/update" element = {
                <PrivateRoute allowedRole="admin">
                    <UpdatePage />
                </PrivateRoute>
            }/>

            <Route path="/customers/dashboard" element = {
                <PrivateRoute allowedRole="admin">
                    <CustomerDashboard />
                </PrivateRoute>
            }/>

            <Route path="*" element = {
              <Navigate to="/" />
            }/>

        </Routes>
        </div>
    );
}

export default App; 