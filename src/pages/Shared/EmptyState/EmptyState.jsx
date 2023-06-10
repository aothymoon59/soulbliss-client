import useAuth from "../../../hooks/useAuth";

const EmptyState = ({ message }) => {
  const { themeIcon } = useAuth();
  return (
    <div className="h-screen gap-5 flex flex-col justify-center items-center pb-16 ">
      <p
        className={`text-xl lg:text-3xl ${
          themeIcon ? "black-text" : "white-text"
        }`}
      >
        {message}
      </p>
    </div>
  );
};

export default EmptyState;
