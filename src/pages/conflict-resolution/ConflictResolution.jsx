import Chatbot from "../../components/chatbot/Chatbot";

function ConflictResolution() {
  return (
    <div>
      <Chatbot
        title="Conflict Resolution  Service Chat"
        onSubmit={(prompt) => {
          return "This is the response";
        }}
      />
    </div>
  );
}

export default ConflictResolution;
