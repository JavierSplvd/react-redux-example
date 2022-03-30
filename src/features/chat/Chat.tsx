import React from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { chatSlice, fetchMessageThunk } from "./chatSlice";

export function Chat() {
  const messages = useAppSelector((chatSlice) => chatSlice.chat.messages);
  const dispatch = useAppDispatch();

  dispatch(fetchMessageThunk);

  return (
    <div>
      {messages.map((it, i) => (
        <p
          key={i}
          style={it.read ? {} : { fontWeight: "bold" }}
          onClick={() => dispatch(chatSlice.actions.read(it.id))}
        >
          {it.value}
        </p>
      ))}
    </div>
  );
}
