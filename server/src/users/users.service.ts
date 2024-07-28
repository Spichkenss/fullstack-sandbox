import { Injectable } from "@nestjs/common";
import { UserEntity } from "./users.types";

@Injectable()
export class UsersService {
  users: UserEntity[] = [];

  constructor() {
    this.users = [
      { id: "1", name: "Sasha" },
      { id: "2", name: "Julia" },
      { id: "3", name: "Den" },
      { id: "4", name: "Dima" },
      { id: "5", name: "Max" },
    ];
  }

  getUsers(): Promise<UserEntity[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.users);
      }, 1000);
    });
  }
}
