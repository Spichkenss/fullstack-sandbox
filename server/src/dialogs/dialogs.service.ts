import { Injectable } from "@nestjs/common";
import { DialogEntity } from "./dialogs.types";

@Injectable()
export class DialogsService {
  dialogs: DialogEntity[] = [];

  constructor() {
    this.dialogs = [
      { id: "1", title: "Мяу", opponent: { id: "2", name: "Julia" } },
      { id: "2", title: "Гав", opponent: { id: "3", name: "Den" } },
      { id: "3", title: "Фыр", opponent: { id: "4", name: "Dima" } },
      { id: "4", title: "Ъуъ", opponent: { id: "5", name: "Max" } },
    ];
  }

  getDialogs(): Promise<DialogEntity[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.dialogs);
      }, 1000);
    });
  }
}
