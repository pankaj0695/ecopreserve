import Chatbot from "../../components/chatbot/Chatbot";

function CommunityService() {
  return (
    <div>
      <Chatbot
        title="Community Service Chat"
        onSubmit={(prompt) => {
          return "This is the response";
        }}
      />
    </div>
  );
}

export default CommunityService;
