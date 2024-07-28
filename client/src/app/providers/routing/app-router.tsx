import { createBrowserRouter } from "react-router-dom";

import { DialogsPageLazy } from "@/pages/dialogs";
import { DialogPageLazy } from "@/pages/dialog";
import { AppLayout } from "@/widgets/layout/app-layout";

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/dialogs',
        element: <DialogsPageLazy />,
      },
      {
        path: 'dialogs/:dialogId',
        element: <DialogPageLazy />,
      }
    ]
  }
]);
