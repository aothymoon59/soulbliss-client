import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import DashboardLayout from "../layouts/DashboardLayout";
import ManageClass from "../pages/Dashboard/AdminPages/ManageClass";
import ManageUsers from "../pages/Dashboard/AdminPages/ManageUsers";
import AddClass from "../pages/Dashboard/InstructorPages/AddClass";
import MyClasses from "../pages/Dashboard/InstructorPages/MyClasses";
import SelectedClass from "../pages/Dashboard/StudentPages/SelectedClass";
import EnrolledClass from "../pages/Dashboard/StudentPages/EnrolledClass";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";
import PaymentHistory from "../pages/Dashboard/StudentPages/PaymentHistory";
import Feedback from "../components/Feedback/Feedback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // admin routes
      {
        path: "manageClass",
        element: (
          <AdminRoute>
            <ManageClass />
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "feedback/:id",
        element: (
          <AdminRoute>
            <Feedback />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/classes/single/${params.id}`),
      },
      // instructor routes
      {
        path: "addClass",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: "myClass",
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
      },
      // student routes
      {
        path: "selectedClass",
        element: (
          <StudentRoute>
            <SelectedClass />
          </StudentRoute>
        ),
      },
      {
        path: "enrolledClass",
        element: (
          <StudentRoute>
            <EnrolledClass />
          </StudentRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <StudentRoute>
            <PaymentHistory />
          </StudentRoute>
        ),
      },
    ],
  },
]);

export default router;
