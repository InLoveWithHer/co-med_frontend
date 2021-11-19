import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter"
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {observer} from "mobx-react-lite";

const App = observer(() => {
  return (
      <BrowserRouter>
        <NavBar/>
        <AppRouter/>
      </BrowserRouter>
  );
});

export default App;
