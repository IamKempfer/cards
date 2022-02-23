import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import styles from "./style.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h1>Logo</h1>
      <nav>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          className={styles.facebook}
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.instagram.com/kmpzin/"
          target="_blank"
          className={styles.twitter}
        >
          <BsTwitter />
        </a>
        <a
          href="https://twitter.com/kmpzin_foo"
          target="_blank"
          className={styles.instagram}
        >
          <BsInstagram />
        </a>
      </nav>
    </header>
  );
}
