import "./App.css";
import VerifyOtp from "./Components/Auth/verifyOtp";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App overflow-hidden relative text-gray-800 bg-gray-200 dark:bg-black/90 p-4">
        <div
          className="blur-3xl absolute bg-blue-200 dark:bg-blue-800/30 w-80 h-56 rounded-full"
          style={{ top: "-18%", right: "1rem" }}
        ></div>
        <div
          className="blur-3xl absolute bg-blue-200 dark:bg-blue-800/30 w-64 h-56 rounded-full"
          style={{ top: "36%", left: "-8rem" }}
        ></div>
        <div
          className="blur-3xl absolute bg-blue-200 dark:bg-blue-800/30 w-64 h-56 rounded-full"
          style={{ top: "85%", right: "21rem" }}
        ></div>
        
         <ToastContainer 
        position="top-right" 
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        {/* <Home/>

        <Profile/>

        <Auth/>  */}

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Auth />} />
          <Route path="/verify-otp" element={<VerifyOtp/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
