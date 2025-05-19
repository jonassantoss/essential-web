import logo from "@/assets/essencial-logo.webp";
import { NotFoundRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./routes/__root";

export const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => <NotFound />,
});

function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center gap-14">
      <img src={logo} alt="" />
      <div className="flex flex-col space-y-4">
        <h1 className="text-8xl text-blue-950 font-black">404</h1>
        <div>
          <h2 className="text-2xl font-medium">
            Ops! Parece que algo deu errado.
          </h2>
          <p className="text-lg font-light">
            A página que você tentou acessar não foi encontrada <br /> ou você
            digitou o endereço incorreto.
          </p>
        </div>
      </div>
    </div>
  );
}
