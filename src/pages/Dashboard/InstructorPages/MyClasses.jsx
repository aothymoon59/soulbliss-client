import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import EmptyState from "../../Shared/EmptyState/EmptyState";
import { FaEdit } from "react-icons/fa";

const MyClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: myClass = [], refetch } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/${user?.email}`);
      console.log("res from axios", res.data);
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle
        heading="My Classes"
        subHeading="Craft your own journey with your tailored classes"
      />
      {myClass && myClass.length > 0 && Array.isArray(myClass) ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class</th>
                <th>Instructor</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Total Enrolled</th>
                <th>Feedback</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myClass.map((singleClass, index) => {
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
                    <td>{singleClass?.seats}</td>
                    <td>${singleClass?.price}</td>
                    <td className="uppercase">
                      <div
                        className={`badge ${
                          singleClass?.status === "pending"
                            ? "badge-warning"
                            : singleClass?.status === "approved"
                            ? "badge-success"
                            : "badge-error"
                        }`}
                      >
                        {singleClass?.status}
                      </div>
                    </td>
                    <td>{singleClass?.enrolled}</td>
                    <td>{singleClass?.feedback}</td>
                    <td>
                      <FaEdit />
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
    </div>
  );
};

export default MyClasses;
