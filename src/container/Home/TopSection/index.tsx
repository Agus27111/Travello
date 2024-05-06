import Container from "../../../components/Container";
import styles from "./TopSection.module.css";
import Button from "../../../components/Button";

function TopSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className="flex flex-col pt-[112px] pb-[58px]">
          <div className="flex flex-col mb-[174px]">
            <h1 className="text-heading-2 font-bold font-label text-grey-100 w-[500px] mb-8">
              Jelajahi Dunia Yang Indah Dengan Satu Sentuhan
            </h1>
            <p className="text-heading-3 text-grey-70 w-[526px] mb-7">
              Jelajahi dunia yang indah dengan satu sentuhan dengan pesan tiket
              di Travel kamu akan dapatkan pelayanan terbaik untuk wisata
              liburan kapan saja dan dimana saja
            </p>
            <Button>Lihat Paket</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TopSection;
