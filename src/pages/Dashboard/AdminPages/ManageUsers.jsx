import { useQuery } from "@tanstack/react-query";
import EmptyState from "../../Shared/EmptyState/EmptyState";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/users`);
    return res.json();
  });

  // make admin
  const handleMakeAdmin = (user) => {
    fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user?.name} is now an Admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // make instructor
  const handleMakeInstructor = (user) => {
    fetch(`${import.meta.env.VITE_API_URL}/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user?.name} is now an Instructor`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDeleteUser = (user) => {
    fetch(`${import.meta.env.VITE_API_URL}/users/delete/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          Swal.fire("Deleted!", `${user.name} has been deleted.`, "success");
        }
      });
  };

  return (
    <>
      {users && users.length > 0 && Array.isArray(users) ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => {
                return (
                  <tr key={user?._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={user?.image} alt={user?.name} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user?.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{user?.email}</td>
                    <td className="uppercase">
                      <div className="badge badge-ghost">{user?.role}</div>
                    </td>
                    <td>
                      <div className="flex gap-2 items-center">
                        {user.role === "admin" ? (
                          <button className="btn btn-xs cursor-not-allowed">
                            Already Admin
                          </button>
                        ) : (
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className="btn btn-accent text-white btn-xs"
                          >
                            Make Admin
                          </button>
                        )}
                        {user.role === "instructor" ? (
                          <button className="btn btn-xs cursor-not-allowed">
                            Already Instructor
                          </button>
                        ) : (
                          <button
                            onClick={() => handleMakeInstructor(user)}
                            className="btn btn-info text-black btn-xs"
                          >
                            Make Instructor
                          </button>
                        )}
                      </div>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteUser(user)}
                        className="text-red-600 text-xl"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyState message={"No Users Data Available!"} />
      )}
    </>
  );
};

export default ManageUsers;
