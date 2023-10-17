import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser)
    const handleDelete = id =>{
          // make sure usser confirm delete
          fetch(`http://localhost:5000/user/${id}`,{
               method : 'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
              if(data.deletedCount > 0){
                 alert('deleted successfully')
                 // remove the users form the ui
                 const remaining = users.filter(user => user._id !== id)
                 setUsers(remaining)
              }
          })
    }

    return (
        <div>
            <h1>users :{users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last LogIn</th>
                            <th>Last Logged At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>

                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <th>{user.lastLoginAt}</th>
                                <th>{user.lastLoggedAt}</th>
                                <td>
                                    <button onClick={()=> handleDelete(user._id)} className="btn">X</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;