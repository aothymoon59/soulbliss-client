import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useClasses from "../../../hooks/useClasses";
import EmptyState from "../../Shared/EmptyState/EmptyState";

const ManageClass = () => {
  const [classes, refetch] = useClasses();
  console.log(classes);
  return (
    <div>
      <SectionTitle
        heading="Manage Classes"
        subHeading="Effortlessly organize and enhance your yoga journey"
      />
      {classes && classes.length > 0 && Array.isArray(classes) ? (
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
                <th>Action</th>
                <th>Feedback</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {classes.map((singleClass, index) => {
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
                    <td>
                      {singleClass?.instructor}
                      <br />
                      <span className="badge badge-ghost badge-sm rounded-none">
                        {singleClass?.email}
                      </span>
                    </td>
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
                    <td>
                      <div className="flex gap-2 items-center">
                        {classes.status === "approved" ? (
                          <button className="btn btn-xs cursor-not-allowed">
                            Already Approved
                          </button>
                        ) : (
                          <button
                            // onClick={() => handleMakeAdmin(user)}
                            className="btn btn-success text-white btn-xs"
                          >
                            Approve
                          </button>
                        )}
                        {classes.status === "denied" ? (
                          <button className="btn btn-xs cursor-not-allowed">
                            Already Denied
                          </button>
                        ) : (
                          <button
                            // onClick={() => handleMakeInstructor(user)}
                            className="btn btn-error text-white btn-xs"
                          >
                            Deny
                          </button>
                        )}
                      </div>
                    </td>
                    {/* TODO: update functionality */}
                    <td>
                      <button className="btn btn-xs capitalize">
                        Write feedback
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
    </div>
  );
};

export default ManageClass;
