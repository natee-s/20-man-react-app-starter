import { useState } from 'react';
import { mockMembers } from '../mockData'; 
import UserTable from './UserTable';      
import AdminSection from './AdminSection'; 

const Home = () => {
  const [sector, setSector] = useState(''); 

  return (
    <div className="flex flex-col items-center p-10 gap-8">
       <div className="text-center">
        <h1 className="text-4xl font-bold mb-1">
          Generation Thailand
        </h1>
        <h2 className="text-4xl font-bold">
          {sector === 'admin' ? 'Home - Admin Sector' : sector === 'user' ? 'Home - User Sector' : 'React - Assessment'}
        </h2>
      </div>

      <div className="flex gap-10">
        <button 
          onClick={() => setSector('user')} 
          className="bg-white text-black font-bold py-4 px-8 rounded shadow-md hover:bg-gray-200 transition"
        >
          User Home View
        </button>
        
        <button 
          onClick={() => setSector('admin')} 
          className="bg-white text-black font-bold py-4 px-8 rounded shadow-md hover:bg-gray-200 transition"
        >
          Admin Home View
        </button>
      </div>
      {sector === 'user' && (
        <div className="mt-10 w-full max-w-4xl">
          <UserTable data={mockMembers} /> 
        </div>
      )}
      {sector === 'admin' && (
         <AdminSection />
      )}
      
    </div>
  );
};

export default Home;