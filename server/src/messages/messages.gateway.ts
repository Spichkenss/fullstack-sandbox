import { Logger } from "@nestjs/common";

import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
} from "@nestjs/websockets";

import { Socket } from "socket.io";
import { MessageEntity } from "./messages.types";

@WebSocketGateway(81, { cors: { origin: "http://localhost:3000" }, namespace: "messages" })
export class MessagesGateway implements OnGatewayConnection {
  handleConnection(@ConnectedSocket() socket: Socket) {
    Logger.log(`${socket.id} connected`);
  }

  @SubscribeMessage("messages:join-to-dialog")
  handleJoinDialog(@MessageBody() dialogId: string, @ConnectedSocket() socket: Socket) {
    socket.join(dialogId);
  }

  @SubscribeMessage("messages:send-to-server")
  handleSendMessage(@MessageBody() message: MessageEntity, @ConnectedSocket() socket: Socket) {
    const { dialogId, ...messagePayload } = message;
    socket.to(dialogId).emit("messages:send-to-dialog", messagePayload);
  }
}
