import { useEffect, useState } from "react";
import Navbar from "../components/NavBar.jsx";
import RateLimitedUI from "../components/RateLimitedUI.jsx";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  const [notes,setNotes] = useState ([]);
  const [loading,setLoading] = useState (true);


  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("/api/notes");
        console.log(response.data);
        setNotes(response.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching notes:");
        console.log(error.response);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to fetch notes. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []); 

  return (
    <div className= "min-h-screen">
      <Navbar/>
      {isRateLimited && <RateLimitedUI />}
    </div>
  );
};

export default HomePage;