import './App.css';
// Context
import { ChatProvider } from './context/ChatProvider';
// Components/ui
import { Chat } from './components';

function App() {
  return (
    <ChatProvider>
      <Chat />
    </ChatProvider>
  );
}

export default App;
