import React from "react";
import CreateApplication from "./CreateApplication";
import Header from "./Header";
import Home from "./Home";

function Layout() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <CreateApplication />
      </div>
    </div>
  );
}

export default Layout;
