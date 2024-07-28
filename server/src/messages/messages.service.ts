import { Injectable } from "@nestjs/common";
import { MessageEntity } from "./messages.types";

@Injectable()
export class MessagesService {
  messages: MessageEntity[] = [];

  constructor() {
    this.messages = [
      {
        id: "1",
        dialogId: "1",
        sender: { id: "1", name: "Sasha" },
        sentAt: Date.now().toLocaleString(),
        text: "Привет",
      },
      {
        id: "2",
        dialogId: "1",
        sender: { id: "2", name: "Julia" },
        sentAt: Date.now().toString(),
        text: "Привет",
      },
      {
        id: "3",
        dialogId: "2",
        sender: { id: "1", name: "Sasha" },
        sentAt: Date.now().toString(),
        text: "Пока",
      },
      {
        id: "4",
        dialogId: "2",
        sender: { id: "3", name: "Den" },
        sentAt: Date.now().toString(),
        text: "Пока",
      },
    ];
  }

  getMessages(dialogId: string): Promise<MessageEntity[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.messages.filter((message) => message.dialogId === dialogId));
      }, 2000);
    });
  }
}
