import React from "react";

import Menu from "./components/Menu";
import RouteContent from "./routes";
import AuxiliaryPage from "./views/AuxiliaryPage";

const App = () => {
  return (
    <div className="AppContent">
      <Menu />
      <RouteContent />
      <AuxiliaryPage />
    </div>
  );
};

export default App;
