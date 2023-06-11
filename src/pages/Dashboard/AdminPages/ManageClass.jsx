import useClasses from "../../../hooks/useClasses";

const ManageClass = () => {
  const [classes, refetch] = useClasses();
  console.log(classes);
  return (
    <div>
      <h2>Manage class</h2>
    </div>
  );
};

export default ManageClass;
