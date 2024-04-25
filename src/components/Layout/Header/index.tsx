import Image from "next/image";
import logoTravello from "../../../../public/assets/travelo-logo-header.png";

export default function Header() {
  return (
    <header className="h-[85px] bg-slate-700 shadow-lg p-4 mt-4">
      <div className="flex justify-content-between items-center">
        <Image
          src={logoTravello}
          alt="logoTravello"
          width="182"
          height="48"
          placeholder="blur"
        />
      </div>
    </header>
  );
}
