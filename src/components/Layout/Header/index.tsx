import Image from "next/image";
import logoTravello from "../../../../public/assets/travelo-logo-header.png";
import Button from "../../Button";
import Container from "../../Container";
import Search from "./Search";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="h-[85px] bg-white shadow-xl p-4 fixed top-0 left-0 right-0 z-20">
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
          <div className="flex gap-5">
            <Nav />
            <Button className="w-[190px]">Masuk</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
