import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import EmptyState from "../../Shared/EmptyState/EmptyState";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const EnrolledClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: myEnrolled = [] } = useQuery({
    queryKey: ["enrolled", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/enrolled/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>Enrolled Class - Dashboard</title>
      </Helmet>
      <SectionTitle
        heading="Enrolled Classes"
        subHeading="Explore Your Enrolled Classes: Stay Committed!"
      />
      {myEnrolled && myEnrolled.length > 0 && Array.isArray(myEnrolled) ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class</th>
                <th>Instructor</th>
                <th>Instructor Email</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myEnrolled.map((singleClass, index) => {
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
                    <td>{singleClass?.email}</td>
                    <td>${singleClass?.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyState message={"No Enrolled Available!"} />
      )}
    </div>
  );
};

export default EnrolledClass;
