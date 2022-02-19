import { useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  useEffect(() => {
    if (!state.user.isAdmin) {
      navigate("/");
    }
  });
  return (
    <div className="flex flex-row gap-16">
      <Sidebar />
      <div className="flex-grow mt-6">
        <Outlet />
      </div>
    </div>
  );
}
