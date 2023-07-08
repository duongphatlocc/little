import React from "react";
import "./App.css";

import PageContent from "./Component/PageContent/index";
import Header from "./Component/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <Header />
        <PageContent></PageContent>
      </div>
    </div>
  );
};

export default App;
