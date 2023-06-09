import { RingLoader } from "react-spinners";
import useAuth from "../../hooks/useAuth";

const Spinner = () => {
  const { themeIcon } = useAuth();
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
      <RingLoader size={100} color={`${themeIcon ? "#13795B" : "#cff699"}`} />
    </div>
  );
};

export default Spinner;
