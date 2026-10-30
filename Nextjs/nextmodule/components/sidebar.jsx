
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();//it tells about the current URL pathname of the page the user is visiting

  const menuItems = [
    {
      title: "Dashboard",
      path: "/shop",
      icon: LayoutDashboard,
    },
    {
      title: "Products",
      path: "/shop/products",
      icon: Package,
    },
    {
      title: "Orders",
      path: "/shop/orders",
      icon: ShoppingCart,
    },
    {
      title: "Customers",
      path: "/shop/customers",
      icon: Users,
    },
    {
      title: "Settings",
      path: "/shop/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col bg-[#111827] p-5 text-white">

      {/* Logo */}
      <div className="mb-10 flex items-center gap-3 px-2">
        <div className="rounded-lg bg-indigo-600 p-2">
          <LayoutDashboard size={22} />
        </div>

        <span className="text-xl font-bold tracking-wide">
          My Dashboard
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
          Menu
        </p>

        {menuItems.map((item) => {
          const isActive =
            item.path === "/shop"
              ? pathname === "/shop"
              : pathname === item.path ||
                pathname.startsWith(`${item.path}/`);

          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-950/30"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Icon size={20} strokeWidth={2} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <footer className="border-t border-gray-700 pt-5">
        <p className="px-2 text-xs text-gray-500">
          © 2026 My Dashboard
        </p>
        <p className="mt-1 px-2 text-xs text-gray-600">
          All rights reserved.
        </p>
      </footer>

    </aside>
  );
};

export default Sidebar;
