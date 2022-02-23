import { BiBuildings } from "react-icons/bi";
import { FaRulerCombined } from "react-icons/fa";
import { RiCompasses2Fill } from "react-icons/ri";
import styles from "./style.module.css";

type CardProps = {
  image: JSX.Element;
  title: string;
  strong?: string;
  content: string;
};

export function Card({ image, title, content, strong }: CardProps) {
  return (
    <div className={styles.card}>
      <span>{image}</span>
      <h1>
        {title} <br />
        <span>{strong}</span>
      </h1>
      <p>{content}</p>
      <a href="#">More</a>
    </div>
  );
}
