import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { MdOutlineAddCard } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // upload image
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const classImg = imgData.data.display_url;
          const { name, email, instructor, price, seats } = data;
          const newClass = {
            name,
            classImg,
            instructor,
            email,
            seats: parseInt(seats),
            price: parseFloat(price),
            status: "pending",
            enrolled: 0,
            feedback: "N/A",
          };
          axiosSecure.post("/classes", newClass).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Class added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Add Class - Dashboard</title>
      </Helmet>
      <SectionTitle
        heading="Add A Class"
        subHeading="Empower Your Yoga Studio: Effortlessly Add Classes"
      />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* class name and image  */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Class Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Type Class Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-medium">Add Class Image</span>
              </label>
              <input
                type="file"
                {...register("image", { required: true })}
                name="image"
                className="file-input file-input-bordered w-full"
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
                value={user.displayName}
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
                value={user.email}
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
                name="seats"
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
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <button
            type="submit"
            className="my-btn flex justify-center items-center gap-2 mt-4 hover:bg-transparent hover:text-[#13795B] transition-all duration-200 ease-linear"
          >
            <MdOutlineAddCard /> Add Class
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
