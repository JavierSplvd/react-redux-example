import React from "react";

import { useAppDispatch } from "../../app/hooks";
import { fetchMessageThunk } from "./chatSlice";

export function GetMoreButton() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={()=>dispatch(fetchMessageThunk())}>Get messages</button>
    </div>
  );
}
