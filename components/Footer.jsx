import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="logo" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID. THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUT RESTURANTS</h1>
          <p className={styles.text}>
            <br />
            1600 Aamphitheatre Parkway #344.
            <br /> Mountain View, CA
            <br /> (123) 456-7890
          </p>
          <p className={styles.text}>
            <br />
            1600 Aamphitheatre Parkway #344.
            <br /> Mountain View, CA
            <br /> (123) 456-7890
          </p>
          <p className={styles.text}>
            <br />
            1600 Aamphitheatre Parkway #344.
            <br /> Mountain View, CA
            <br /> (123) 456-7890
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            <br />
            MONDAY - FRIDAY
            <br /> 11:00 - 22:00
          </p>
          <p className={styles.text}>
            <br />
            SATURDAY - SUNDAY
            <br /> 9:00 - 22:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
