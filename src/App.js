import React from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import Search from "./Components/Search";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Footer from "./Components/Footer";

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <NavBar />
        <Search />
      </div>
      <Footer />
    </MuiThemeProvider>
  );
}

export default App;
