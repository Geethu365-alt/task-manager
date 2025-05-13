
import { useSelector} from 'react-redux';


export default function Home() {
  const user = useSelector((state) => state.auth.user);


  return (
    
      <div className="text-center mt-50 ">
      <h2 className="text-3xl font-bold mb-4">Welcome to Task Manager</h2>
      {user ? (
        <p className="text-gray-700">Hello, <span className="font-semibold text-red-600">{user}</span>! Head over to your <a href="/tasks" className="text-blue-500 hover:underline">Tasks</a>.</p>
      ) : (
        <p className="text-gray-700">Please <a href="/login" className="text-blue-500 hover:underline">login</a> to manage your tasks.</p>
      )}
    </div>
  );
}