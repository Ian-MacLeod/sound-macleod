import React from "react";
import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";
import ModalHolder from "./modal/modal_holder_container";

const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
    <ModalHolder />
  </div>
);

export default App;
