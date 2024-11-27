import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Logs from "./pages/logs/Logs";
import Permission from "./pages/permission/Permission";
import Roles from "./pages/roles/Roles";
import User from "./pages/users/User";
import Profile from "./pages/profile/Profile";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import Footer from "./parts/Footer";


function App() {
  const [loading, setLoading] = useState<boolean>(false);
  
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="scrollbar-hide">
    <Router>
     {loading ?(
      <div className="flex flex-col justify-center items-center min-h-screen">
       <img src="/loader.png" className="w-20 h-20" />
       <LoaderCircle className="text-green-900 animate-spin w-16 h-16"/>
    </div>):
       ( <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/users" element={<User />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/permissions" element={<Permission />} />
          <Route path="/user/profile" element={<Profile />} />
        </Routes>
      
    )} 
    </Router>
    <div className="md:ml-64">
    <Footer/>
    </div>
     
    </div>
  );
}

export default App;
