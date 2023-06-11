import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useClasses from "../../../hooks/useClasses";
import EmptyState from "../../Shared/EmptyState/EmptyState";

const ManageClass = () => {
  const [classes, refetch] = useClasses();

  // handle approve
  const handleApprove = (singleClass) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to approve this class!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `${import.meta.env.VITE_API_URL}/classes/approved/${singleClass._id}`,
          {
            method: "PATCH",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              refetch();
              Swal.fire(
                "Updated!",
                `${singleClass?.name} class is approved`,
                "success"
              );
            }
          });
      }
    });
  };

  // handle approve
  const handleDeny = (singleClass) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to deny this class!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, deny!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `${import.meta.env.VITE_API_URL}/classes/denied/${singleClass._id}`,
          {
            method: "PATCH",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              refetch();
              Swal.fire(
                "Updated!",
                `${singleClass?.name} class is denied`,
                "success"
              );
            }
          });
      }
    });
  };

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
                        {singleClass.status === "approved" ||
                        singleClass.status === "denied" ? (
                          <button className="btn btn-xs cursor-not-allowed">
                            Approve
                          </button>
                        ) : (
                          <button
                            onClick={() => handleApprove(singleClass)}
                            className="btn btn-success text-white btn-xs"
                          >
                            Approve
                          </button>
                        )}
                        {singleClass.status === "denied" ||
                        singleClass.status === "approved" ? (
                          <button className="btn btn-xs cursor-not-allowed">
                            Deny
                          </button>
                        ) : (
                          <button
                            onClick={() => handleDeny(singleClass)}
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
