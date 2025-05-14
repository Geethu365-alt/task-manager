
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';



export default function Home() {
  const user = useSelector((state) => state.auth.user);


  return (
    
      <div className="text-center mt-50 ">
      <h2 className="text-3xl font-bold mb-4">Welcome to Task Manager</h2>
      {user ? (
        <p className="text-gray-700">Hello, <span className="font-semibold text-red-600">{user}</span>! Head over to your <Link to="/tasks" className="text-blue-500 hover:underline">Tasks</Link></p>
      ) : (
        <p className="text-gray-700">Please <Link to="/login" className="text-blue-500 hover:underline">login</Link>  to manage your tasks.</p>
      )}
    </div>
  );
}