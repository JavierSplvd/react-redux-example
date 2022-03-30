import { Message } from "./chatSlice";

// A mock function to mimic making an async request for data
export function fetchMessage() {
  return new Promise<Message>((resolve) =>
    setTimeout(
      () =>
        resolve({ id: Math.random() * 10000 + "", read: false, value: "Foo" }),
      500
    )
  );
}
