import { AuthProvider } from "@/contexts/AuthContext";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <AuthProvider>
      <>
        <Outlet />
        <TanStackRouterDevtools />
      </>
    </AuthProvider>
  ),
});
