import { Controller, Get } from "@nestjs/common";
import { DialogsService } from "./dialogs.service";
import { DialogEntity } from "./dialogs.types";

@Controller("dialogs")
export class DialogsController {
  constructor(private readonly dialogsService: DialogsService) {}

  @Get()
  getDialogs(): Promise<DialogEntity[]> {
    return this.dialogsService.getDialogs();
  }
}
