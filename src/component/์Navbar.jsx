import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 border-b border-gray-300"> 
      <div className="container mx-auto flex justify-end items-center px-4"> 
 
        
        <ul className="flex space-x-10 font-bold text-lg"> 
          <li>
            <Link to="/" className="text-black hover:text-gray-500">Home</Link>
          </li>
          <li>
            <Link to="/owner" className="text-black hover:text-gray-500">Owner</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;