import React from "react";
import "./App.css";
import { Chat } from "./features/chat/Chat";
import { GetMoreButton } from "./features/chat/GetMoreButton";
import { Title } from "./features/chat/Title";

function App() {
  return (
    <div className="App">
      <Title />
      <GetMoreButton />
      <Chat />
    </div>
  );
}

export default App;
