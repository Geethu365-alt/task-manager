
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import Home from './pages/Home';
import Task from './pages/Task';
import About from './pages/About';
import Login from './pages/Login';
import { logout } from './Redux/authSlice';







function PrivateRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.loggedIn);
  return isAuthenticated ? children : <Navigate to="/login" />;
}




function App() {
  const isAuthenticated = useSelector((state) => state.auth.loggedIn);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };


  

  return (
    <>
     
      <Router>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-blue-600 text-dark p-4 flex justify-between">
            <h1 className="text-xl font-bold">Task Manager</h1>
            <div className="space-x-4 justify-content">
             <Link to="/" className="hover:underline text-black">Home</Link> 
              
               
              <Link to="/about" className="hover:underline text-black">About</Link>
             
{isAuthenticated ? (
                <>
                  <Link to="/tasks" className="hover:underline text-black">Task</Link>
                   <span className="text-white">{user}</span>
                  
                  <button onClick={handleLogout} className="hover:underline text-red-200 text-black">Logout</button> 
                </>
              ) : (
                <Link to="/login" className="hover:underline text-black ">Login</Link>
              )}


               
            </div>
          </nav>
          <div className="p-4">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Task />} />
              <Route path="/about" element={<About />} />
              
            </Routes>
          </div>
        </div>
      </Router>
    
      
    </>
  )
}
      
  
  


export default App
