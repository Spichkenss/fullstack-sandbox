import { UserEntity } from "src/users/users.types";

export type MessageEntity = {
  id: string;
  text: string;
  dialogId: string;
  sender: UserEntity;
  sentAt: string;
}
