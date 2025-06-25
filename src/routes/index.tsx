import { createFileRoute } from "@tanstack/react-router";
import AuthRedirect from "@/components/AuthRedirect";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return <AuthRedirect />;
}
