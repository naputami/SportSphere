import { Navbar } from "./navbar";
export const PageTemplate = ({ children }) => {
    return (
      <>
        <div className="relative min-h-screen">
          <div className="pb-16">
           <Navbar />
            {children}
          </div>
        </div>
      </>
    );
  };