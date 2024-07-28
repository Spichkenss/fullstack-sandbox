import { RouterProvider } from "react-router-dom";

import { appRouter } from  "./providers/routing/app-router";

export const App = () => {
  return (
    <RouterProvider router={appRouter} />
  );
};
