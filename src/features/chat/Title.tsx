import React from "react";

import { useAppSelector } from "../../app/hooks";

export function Title() {
  const messages = useAppSelector((chatSlice) => chatSlice.chat.messages);

  return (
    <div>
      You have {messages.filter((it) => !it.read).length} unread messages.
    </div>
  );
}
