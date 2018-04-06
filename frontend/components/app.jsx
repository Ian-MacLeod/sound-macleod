import React from "react";

import LoggedInHeader from "./header/logged_in_header_container";
import LoggedOutHeader from "./header/logged_out_header_container";
import Main from "./main/main";
import Footer from "./footer/footer";
import ModalHolder from "./modal/modal_holder_container";
import { BooleanComponent } from "../utils/auth_utils";
import Player from "./player/player_container";

const App = () => (
  <div className="app">
    <BooleanComponent
      loggedInComponent={LoggedInHeader}
      loggedOutComponent={LoggedOutHeader}
    />
    <Main />
    <Footer />
    <Player />
    <ModalHolder />
  </div>
);

export default App;
