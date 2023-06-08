import { RingLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div
      className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      {/* TODO: color will conditional for dark/light theme  */}
      <RingLoader size={100} color="#13795B" />
    </div>
  );
};

export default Spinner;
