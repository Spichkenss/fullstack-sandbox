import { Controller, Get, Query } from "@nestjs/common";
import { MessagesService } from "./messages.service";
import { MessageEntity } from "./messages.types";

@Controller("messages")
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  getMessages(@Query("dialogId") dialogId: string): Promise<MessageEntity[]> {
    return this.messagesService.getMessages(dialogId);
  }
}
