import AuthRedirect from "@/components/AuthRedirect";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return <AuthRedirect />;
}
