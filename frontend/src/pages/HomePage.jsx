import { useState } from "react";
import Navbar from "../components/NavBar.jsx";
import RateLimitedUI from "../components/RateLimitedUI.jsx";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  const [notes,setNotes] = useState ([]);
  const [loading,setLoading] = useState (true);

  return (
    <div className= "min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUI />}
    </div>
  );
};

export default HomePage;