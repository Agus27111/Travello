import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
  noFooter?: boolean;
};

export default function Layout({ children, noFooter = false }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      {noFooter ? null : <Footer />}
    </>
  );
}
