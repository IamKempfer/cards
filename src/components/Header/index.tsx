import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import styles from "./style.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h1>Logo</h1>
      <nav>
        <a href="foo" target="_blank">
          <BsFacebook />
        </a>
        <a href="foo" target="_blank">
          <BsTwitter />
        </a>
        <a href="foo" target="_blank">
          <BsInstagram />
        </a>
      </nav>
    </header>
  );
}
