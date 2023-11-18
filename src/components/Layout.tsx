import React, { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return <div className="max-w-5xl w-full h-screen mx-auto">{children}</div>;
}

export default Layout;
