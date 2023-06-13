import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { MdBrowserUpdated } from "react-icons/md";

const UpdateMyClass = () => {
  const singleClass = useLoaderData();

  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { name, price, seats } = data;
    const updatedClass = {
      name,
      seats: parseInt(seats),
      price: parseFloat(price),
      status: "pending",
      feedback: "N/A",
    };

    axiosSecure
      .put(`/classes/update/${singleClass?._id}`, updatedClass)
      .then((data) => {
        if (data.data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class Updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/myClass");
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Update Class - Dashboard</title>
      </Helmet>
      <SectionTitle
        heading="Update A Class"
        subHeading="Empower Your Yoga Studio: Effortlessly Update Classes"
      />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* class name and image  */}
          <div className="grid grid-cols-1">
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Class Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                defaultValue={singleClass?.name}
                placeholder="Type Class Name"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* instructor name and email  */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Instructor Name</span>
              </label>
              <input
                type="text"
                {...register("instructor", { required: true })}
                name="name"
                value={user?.displayName}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Instructor Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                value={user?.email}
                readOnly
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* available seat and price  */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Available seats</span>
              </label>
              <input
                type="number"
                {...register("seats", { required: true })}
                defaultValue={singleClass?.seats}
                placeholder="Available seats"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Price</span>
              </label>
              <input
                type="price"
                {...register("price", { required: true })}
                defaultValue={singleClass?.price}
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <button
            type="submit"
            className="my-btn flex justify-center items-center gap-2 mt-4 hover:bg-transparent hover:text-[#13795B] transition-all duration-200 ease-linear"
          >
            <MdBrowserUpdated /> Update Class
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMyClass;
