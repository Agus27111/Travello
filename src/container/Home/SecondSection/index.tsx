import React from "react";
import styles from "./SecondSection.module.css";
import Container from "../../../components/Container";
import PromoCarousel from "./PromoCarousel";
import "react-multi-carousel/lib/styles.css";

function SecondSection() {
  return (
    <section className={styles.section}>
      <Container>
        <PromoCarousel />
      </Container>
    </section>
  );
}

export default SecondSection;
