import React from "react";
import Container from "../../Container";
import logoFooter from "../../../../public/assets/travelo-logo-footer.png";
import styles from "./Footer.module.css";
import Image from "next/image";
import FooterInfo from "./FooterInfo";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container size="lg">
        <div className="flex bg-white p-16">
          <figure>
            <Image
              src={logoFooter}
              alt="logoTravello"
              width="182"
              height="48"
              placeholder="blur"
            />
          </figure>
          <div className="flex flex-1 justify-between ml-[106px]">
            <FooterInfo
              title="info"
              content={[
                {
                  label: "Tentang Kami",
                  href: "/",
                },
                {
                  label: "Testimonial",
                  href: "/",
                },
                {
                  label: "Kontak",
                  href: "/",
                },
              ]}
            />
            <FooterInfo
              title="Perusahaan"
              content={[
                {
                  label: "Syarat & Ketentuan",
                  href: "/",
                },
                {
                  label: "Kebijakan Privasi",
                  href: "/",
                },
                {
                  label: "Blog",
                  href: "/",
                },
                {
                  label: "Bantuan Pelayanan",
                  href: "/",
                },
              ]}
            />
            <FooterInfo
              title="Kontak"
              content={[
                "Jl. Dago No 1A",
                "Bandung, Jawa Barat",
                "Indonesia",
                "(022) 222 222",
                "contact@email.com",
              ]}
            />
          </div>
        </div>
      </Container>
      <div className="bg-blue-100 p-3">
        <p className="text-center text-heading-5 text-white font-bold">
          Copyright © 2022 Travelo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
