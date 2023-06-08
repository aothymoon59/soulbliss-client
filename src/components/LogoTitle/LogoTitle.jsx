const LogoTitle = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium sm:font-bold">
          Soul
        </span>
        {/* TODO: image src will conditionally change when dark/light theme  */}
        <img
          src={"https://i.ibb.co/fCxzStJ/darklogo.png"}
          className="w-6 sm:w-8 md:w-10 lg:w-12"
          alt="Nav Logo"
        />
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium sm:font-bold">
          Bliss
        </span>
      </div>
    </>
  );
};

export default LogoTitle;
