
const ChatBubble = ({ role, content }) => {
    return (
      <div className={`mb-3 ${role === 'user' ? 'text-right' : 'text-left'}`}>
        <div className={`inline-block px-4 py-2 rounded max-w-xl ${
          role === 'user' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
          {content}
        </div>
      </div>
    );
  };
  
  export default ChatBubble;
  