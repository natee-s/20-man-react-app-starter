import React from 'react';

const AdminSection = () => {
  return (
    <div className="container mx-auto p-8 text-center">
      <div className="flex justify-center gap-4 mb-16">
        
        
      </div>

    
      <div className="text-left mb-8">
        <h2 className="text-xl font-semibold mb-4 ml-2">
          Create User Here
        </h2>
        <form className="flex flex-col md:flex-row gap-4 items-end justify-center bg-gray-50 p-6 rounded-lg shadow-sm">
          
        
          <div className="flex-1 w-full">
            
            <input 
              type="text" 
              placeholder="Name" 
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:border-purple-500"
            />
          </div>

        
          <div className="flex-1 w-full">
           
            <input 
              type="text" 
              placeholder="Last Name" 
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:border-purple-500"
            />
          </div>

       
          <div className="flex-1 w-full">
         
            <input 
              type="text" 
              placeholder="Position" 
              className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:border-purple-500"
            />
          </div>

       
          <button 
            type="button" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded w-full md:w-auto"
          >
            Save
          </button>
        </form>
      </div>

     
      <div className="text-left">
        <h2 className="text-sm font-light text-gray-500 mb-2">Table 1</h2>

        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
           <div className="overflow-x-auto w-full">
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
                <thead>
                    <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left border-r border-gray-300">Name</th>
                        <th className="py-3 px-6 text-left border-r border-gray-300">Last Name</th>
                        <th className="py-3 px-6 text-left">Position</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    
                        <tr 
                            className="border-b border-gray-200 hover:bg-gray-50"
                        >
                            <td className="py-3 px-6 text-left whitespace-nowrap border-r border-gray-300">
                               
                            </td>
                            <td className="py-3 px-6 text-left border-r border-gray-300">
                               
                            </td>
                            <td className="py-3 px-6 text-left">
                                
                            </td>
                        </tr>

                        <tr  className="border-b border-gray-200 h-10">
                            <td className="py-3 px-6 border-r border-gray-300"></td>
                            <td className="py-3 px-6 border-r border-gray-300"></td>
                            <td className="py-3 px-6"></td>
                        </tr>
                    
                </tbody>
            </table>
        </div>
        </div>
      </div>

    </div>
  );
};

export default AdminSection;