import { FileClock, Home, Layers2, Shield, User2Icon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  const menuList = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "Users", icon: User2Icon, path: "/users" },
    { name: "Roles", icon: Layers2, path: "/roles" },
    { name: "Permission", icon: Shield, path: "/permissions" },
    { name: "Logs", icon: FileClock, path: "/logs" },
  ];


  return (
    <div className="h-screen p-5 shadow-sm border bg-white">
      {/* Header */}
      <div className="flex items-center justify-center shadow-sm border-b pb-4">
        <img src="/logo.jpg" className="rounded-md" width={50} height={50} alt="Logo" />
        <h2 className="font-serif text-lg ml-2">VRV Security</h2>
      </div>

      <hr className="my-0 border-gray-300" />

      {/* Menu */}
      <div className="mt-6">
        {menuList.map((menu, index) => (
          <Link
            key={index}
            to={menu.path}
            className={`flex gap-2 mb-2 mt-5 p-3 items-center shadow-sm rounded-lg hover:bg-primary hover:text-white
            ${pathname === menu.path ? "bg-primary text-white" : "text-gray-600"}`}
          >
            <menu.icon className="w-5 h-5" />
            <h1 className="text-sm font-medium">{menu.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
