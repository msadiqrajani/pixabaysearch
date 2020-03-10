import React from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import Search from "./Components/Search";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <NavBar />
        <Search />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
