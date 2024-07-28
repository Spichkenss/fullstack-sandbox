import { Suspense } from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <header>
        <NavLink to={'/dialogs'}>Диалоги</NavLink>
      </header>
      <main>
        <Suspense fallback={"Loading..."}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
