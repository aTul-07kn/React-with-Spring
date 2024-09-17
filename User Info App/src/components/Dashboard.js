import React from 'react'

const Dashboard = ({ users }) => {
  return (
    <div className="p-12 relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right shadow-xl rounded-lg text-gray-400">
            <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr className='text-center'>
                <th scope="col" className="px-6 py-3">
                S.no
                </th>
                <th scope="col" className="px-6 py-3">
                Username
                </th>
                <th scope="col" className="px-6 py-3">
                Name
                </th>
                <th scope="col" className="px-6 py-3">
                Email
                </th>
                <th scope="col" className="px-6 py-3">
                Action
                </th>
            </tr>
            </thead>
            <tbody>
            {
                users.length > 0 ?
                (
                users.map((user, index) => (
                    <tr key={index} className=" odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700 text-center">
                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                        {index + 1}
                    </th>
                    <td className="px-6 py-4">
                        {user.username}
                    </td>
                    <td className="px-6 py-4">
                        {user.name}
                    </td>
                    <td className="px-6 py-4">
                        {user.email}
                    </td>
                    <td className="px-6 py-4">
                        <div className='flex justify-center gap-3'>
                        <button className='bg-green-600 px-3 py-2 hover:bg-green-800 rounded-lg text-white'>View</button>
                        <Link to="/edituser" className='bg-blue-600 px-3 py-2 hover:bg-blue-800 rounded-lg text-white'>Edit</Link>
                        <button className='bg-red-600 px-3 py-2 hover:bg-red-800 rounded-lg text-white'>Delete</button>
                        </div>
                    </td>
                    </tr>
                ))
                ) :
                <tr className='text-center'>
                    <td colSpan="5" className="px-6 py-4 text-gray-400">
                        No data
                    </td>
                </tr>
            }
            </tbody>
        </table>
    </div>
  )
}

export default Dashboard