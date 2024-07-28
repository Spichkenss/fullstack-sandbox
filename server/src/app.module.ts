import { Module } from "@nestjs/common";

import { DialogsModule } from "./dialogs/dialogs.module";
import { UsersModule } from "./users/users.module";
import { MessagesModule } from "./messages/messages.module";

@Module({
  imports: [DialogsModule, UsersModule, MessagesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
