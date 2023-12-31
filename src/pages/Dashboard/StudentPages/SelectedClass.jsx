import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import EmptyState from "../../Shared/EmptyState/EmptyState";
import { FaDollarSign, FaTrashAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SelectedClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data: mySelected = [], refetch } = useQuery({
    queryKey: ["selected", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/selected/${user?.email}`);
      return res.data;
    },
  });

  // delete a selected class
  const handleDeleteClass = (selectedClass) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete ${selectedClass?.name}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `${import.meta.env.VITE_API_URL}/selected/delete/${
            selectedClass._id
          }`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                `${selectedClass.name} has been deleted.`,
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Selected Class - Dashboard</title>
      </Helmet>
      <SectionTitle
        heading="My Selected Classes"
        subHeading="Craft your own journey with your tailored classes"
      />
      {mySelected && mySelected.length > 0 && Array.isArray(mySelected) ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class</th>
                <th>Instructor</th>
                <th>Price</th>
                <th>Pay</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {mySelected.map((singleClass, index) => {
                return (
                  <tr key={singleClass?._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={singleClass?.classImg}
                              alt={singleClass?.name}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{singleClass?.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{singleClass?.instructor}</td>
                    <td>${singleClass?.price}</td>
                    <td>
                      <Link
                        to={`/dashboard/payment/${singleClass._id}`}
                        className="btn btn-outline btn-success btn-xs"
                      >
                        <FaDollarSign /> Pay Now
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteClass(singleClass)}
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
        <EmptyState message={"No Selected Class Available!"} />
      )}
    </div>
  );
};

export default SelectedClass;
