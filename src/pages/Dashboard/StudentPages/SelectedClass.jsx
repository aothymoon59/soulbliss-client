import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import EmptyState from "../../Shared/EmptyState/EmptyState";
import { FaDollarSign, FaTrashAlt } from "react-icons/fa";

const SelectedClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data: mySelected = [] } = useQuery({
    queryKey: ["selected", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/selected/${user?.email}`);
      return res.data;
    },
  });

  console.log(mySelected);

  return (
    <div>
      <SectionTitle
        heading="My Classes"
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
                <th>Remove</th>
                <th>Pay</th>
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
                      <button className="text-red-600 text-xl">
                        <FaTrashAlt />
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-outline btn-success btn-xs">
                        <FaDollarSign /> Pay Now
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
