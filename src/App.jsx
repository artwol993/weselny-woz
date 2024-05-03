import React, { useEffect } from "react";

import Header from "./component/header";
import Footer from "./component/footer";
import Body from "./component/body";

import "./style/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    const handleScrollSpyActivate = (event) => {
      console.log("Scrollspy activated section:", event.target);
    };

    document.addEventListener("activate.bs.scrollspy", handleScrollSpyActivate);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener(
        "activate.bs.scrollspy",
        handleScrollSpyActivate
      );
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
