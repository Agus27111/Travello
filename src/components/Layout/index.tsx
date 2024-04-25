import type { ReactNode } from "react";
import Header from './Header'

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <footer></footer>
    </>
  );
}
