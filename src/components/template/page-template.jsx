import { Navbar } from "../navbar";
import { serverAuth } from "@/libs/serverAuth";
export const PageTemplate = ({ children }) => {
  const user = serverAuth();
  return (
    <>
      <div className="relative min-h-screen">
        <div className="pb-28">
          <Navbar user={user} />
          {children}
        </div>
        <footer className="absolute bottom-0 footer footer-center p-3 bg-dark-navy-theme text-white">
          <aside>
            <p> © {new Date().getFullYear()} - Sport Sphere by Elysium</p>
          </aside>
        </footer>
      </div>
    </>
  );
};
