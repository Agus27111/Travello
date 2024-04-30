import Image from "next/image";
import logoTravello from "../../../../public/assets/travelo-logo-header.png";
import Container from "../../Container";
import Search from "./Search";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="h-[85px] bg-white shadow-xl p-4">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex">
            <Image
              src={logoTravello}
              alt="logoTravello"
              width="182"
              height="48"
              placeholder="blur"
            />
            <Search />
          </div>
          <div className="flex">
            <Nav />
          </div>
        </div>
      </Container>
    </header>
  );
}
