import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import AdminDashboard from './Pages/AdminDashboard';
import CustomerDashboard from './Pages/CustomerDashboard';
import UpdatePage from './Pages/UpdatePage';
import PrivateRoute from "./Components/PrivateRoute";

function App() {
    return (
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

        </Routes>
    );
}

export default App; 