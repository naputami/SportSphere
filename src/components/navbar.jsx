"use client";
import { logoutAction } from "@/app/action";
import toast from "react-hot-toast";
import { useEffect, useActionState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navbar = ({ user }) => {
  const [state, formAction, pending] = useActionState(logoutAction, null);
  const pathname = usePathname();
  useEffect(() => {
    if (state?.status === "success") {
      toast.success(state?.message);
    } else if (state?.status === "error") {
      toast.error(state?.message);
    }
  }, [state]);
  return (
    <>
      <div className="navbar bg-dark-navy-theme lg:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {user && (
                <>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <a>My Community</a>
                  </li>
                  <li>
                    <a>Upcoming Event</a>
                  </li>
                  <li>
                    <a>Create Community</a>
                  </li>
                  <li>
                    <a>Profile</a>
                  </li>
                  <li>
                    <a>Log out</a>
                  </li>
                </>
              )}
              {!user && (
                <>
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                  <li>
                    <Link href="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="btn btn-ghost">
            <Link href="/">
              <img src="/logo.svg" width={200} />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex text-white">
          {user && (
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link
                  href="/"
                  className={`visited:text-white ${
                    pathname === "/" ? "underline" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/community/my-community"
                  className={`visited:text-white ${
                    pathname === "/community/my-community" ? "underline" : ""
                  }`}
                >
                  My Community
                </Link>
              </li>
              <li>
                <Link
                  href="/event/upcoming-event"
                  className={`visited:text-white ${
                    pathname === "/event/upcoming-event" ? "underline" : ""
                  }`}
                >
                  Upcoming Event
                </Link>
              </li>
              <li>
                <Link
                  href="/community/create"
                  className={`visited:text-white ${
                    pathname === "/community/create" ? "underline" : ""
                  }`}
                >
                  Create Community
                </Link>
              </li>
            </ul>
          )}
        </div>
        <div className="navbar-end">
          {!user && (
            <div className="hidden lg:block space-x-8">
              <Link className="text-white" href="/login">
                Login
              </Link>
              <Link
                className="btn bg-yellow-theme hover:bg-yellow-theme"
                href="/register"
              >
                Sign up
              </Link>
            </div>
          )}
          {user && (
            <div className="hidden lg:flex gap-6 space-x-4">
              <div className="flex items-center gap-4">
                <div className="avatar placeholder">
                  <div className="bg-gray-300 text-black w-8 rounded-full">
                    <span>{user.name.charAt(0)}</span>
                  </div>
                </div>
                <p className="text-white">{user.name}</p>
              </div>
              <form action={formAction}>
                <button className="btn bg-yellow-theme hover:bg-yellow-theme">
                  {pending && <span className="loading loading-spinner"></span>}
                  Logout
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
