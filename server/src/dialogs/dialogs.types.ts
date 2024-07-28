import { UserEntity } from "src/users/users.types";

export type DialogEntity = {
  id: string;
  title: string;
  opponent: UserEntity;
}
