import React from "react";
import Logo from "../../img/logo.png";
import "./Auth.css";
import SignUp from "./SignUp.jsx";
import LogIn from "./Login.jsx";

// for dark mode
import { useEffect, useState } from "react"; //also useState is required, but thats already imported above
// for dark mode

const Auth = () => {
  // For Toggle Login And SignUp
  const [login, setLogin] = useState("Login");

  return (
    <div className="Auth flex items-center justify-center h-screen gap-16 relative ">
      <div className="a-left flex flex-col md:flex-row  gap-4 items-center justify-center">
        <img src={Logo} alt="" className="h-24 w-24" />
        <div className="Webname flex flex-col font-bold">
          <h1 className="font-bold text-3xl  bg-[100%] bg-repeat bg-gradient-to-r from-[#2eaafa]-to-[#1060d7] leading-normal">
            FeatherPerfect
          </h1>
          <h6 className="dark:text-white pt-0 mb-1">
            IPF is our Brand Ambassador!
          </h6>
          <h6 className="text-xs font-extralight dark:text-white/80">
            (You guessed it right! It has Perfect Feathers!)
          </h6>
        </div>

        {login === "Login" ? (
          <LogIn setLogin={setLogin} />
        ) : (
          <SignUp setLogin={setLogin} />
        )}
      </div>
    </div>
  );
};

export default Auth;

// bg-gradient-to-r from-[#f9a225] to-[#f95f35]
// linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)
