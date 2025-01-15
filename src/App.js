// import axios from "axios";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Router from "./Router/Router";
import React, { useState } from "react";
import { AuthContextProvider } from "./Context/AuthContext";

function App() {
  // async function register(e) {
  //   e.preventDefault();
  //   let response = await axios.post("http://localhost:5000/find", {
  //     mail,
  //     username,
  //     password,
  //   });
  // }
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  return (
    <div>
      <AuthContextProvider value={{ userData, setUserData }}>
        <Header />
        <Router />
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
