import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/users`);
    return res.json();
  });
  return (
    <div>
      <h2>Manage Users :{users.length}</h2>
    </div>
  );
};

export default ManageUsers;
