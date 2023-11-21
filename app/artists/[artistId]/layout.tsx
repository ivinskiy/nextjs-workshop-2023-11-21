import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h1 className="font-bold text-lg">Artist</h1>
      {children}
    </div>
  );
};

export default Layout;
