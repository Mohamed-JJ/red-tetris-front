import { io, Socket } from "socket.io-client";

const URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5001/";
const mock_URL = "http://localhost:3001/";

export const socket: Socket = io(mock_URL, {
  autoConnect: true, 
  transports: ["websocket"],
  withCredentials: true,
});
