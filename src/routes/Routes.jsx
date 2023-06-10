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
      // instructor routes
      { path: "addClass", element: <AddClass /> },
      { path: "myClass", element: <MyClasses /> },
      // student routes
      { path: "selectedClass", element: <SelectedClass /> },
      { path: "enrolledClass", element: <EnrolledClass /> },
    ],
  },
]);

export default router;
