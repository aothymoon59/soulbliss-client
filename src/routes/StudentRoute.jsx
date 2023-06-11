import { Navigate, useLocation } from "react-router";
import Spinner from "../components/Spinner/Spinner";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const StudentRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }

  if (!isAdmin & !isInstructor && user) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default StudentRoute;
