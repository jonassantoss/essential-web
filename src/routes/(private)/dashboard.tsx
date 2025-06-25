import { createFileRoute, Outlet } from "@tanstack/react-router";
import Header from "@/components/Header";

export const Route = createFileRoute("/(private)/dashboard")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
