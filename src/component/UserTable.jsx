// src/components/UserTable.jsx

const UserTable = ({ data }) => {
    return (
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
                    {data.map((member) => (
                        <tr 
                            key={member.id} 
                            className="border-b border-gray-200 hover:bg-gray-50"
                        >
                            <td className="py-3 px-6 text-left whitespace-nowrap border-r border-gray-300">
                                {member.name}
                            </td>
                            <td className="py-3 px-6 text-left border-r border-gray-300">
                                {member.lastName}
                            </td>
                            <td className="py-3 px-6 text-left">
                                {member.position}
                            </td>
                        </tr>
                    ))}
                    {data.length < 3 && Array.from({ length: 3 - data.length }).map((_, index) => (
                        <tr key={`empty-${index}`} className="border-b border-gray-200 h-10">
                            <td className="py-3 px-6 border-r border-gray-300"></td>
                            <td className="py-3 px-6 border-r border-gray-300"></td>
                            <td className="py-3 px-6"></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;