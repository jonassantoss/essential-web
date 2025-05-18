import logo from "@/assets/essencial-logo.webp";
import { Link } from "@tanstack/react-router";
import MenuNav from "./MenuNav";

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
      <div className="px-4 flex justify-center items-center gap-8">
        <MenuNav />
        <Link to="/">
          <img className="w-3/4" src={logo} alt="Logo da Essencial" />
        </Link>
      </div>
      <div className="bg-gray-200 p-4 rounded-xl font-medium">Lucca Pinz</div>
    </header>
  );
}
