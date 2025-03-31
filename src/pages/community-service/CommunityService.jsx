import { useNavigate } from "react-router-dom";
import Chatbot from "../../components/chatbot/Chatbot";
import Navbar from "../../components/navbar/Navbar";
import { useUser } from "../../store/userContext";
import { useEffect } from "react";

function CommunityService() {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && (!user || !user.name)) navigate("/login");
  }, [isLoading, user]);

  const submitHandler = async (prompt) => {
    console.log(prompt);
    const res = await fetch("http://localhost:3000/auth/community-service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    return data.response;
  };
  return (
    <>
      <Navbar />
      <div>
        <Chatbot title="Community Service Chat" onSubmit={submitHandler} />
      </div>
    </>
  );
}

export default CommunityService;
