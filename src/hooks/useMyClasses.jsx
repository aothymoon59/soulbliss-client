// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";

// const useMyClasses = () => {
//   const { user, loading } = useAuth();
//   const [axiosSecure] = useAxiosSecure();

//   const { refetch, data: myClasses = [] } = useQuery({
//     queryKey: ["classes", user?.email],
//     enabled:
//       !loading && !!user?.email && !!localStorage.getItem("access-token"),
//     queryFn: async () => {
//       const response = await axiosSecure.get(
//         `${import.meta.env.VITE_API_URL}/classes?email=${user.email}`
//       );
//       return response.data;
//     },
//   });
//   return [myClasses, refetch];
// };

// export default useMyClasses;
