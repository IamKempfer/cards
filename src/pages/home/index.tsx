import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { BiHome, BiBuildings } from "react-icons/bi";
import { RiCompasses2Fill } from "react-icons/ri";
import { FaRulerCombined } from "react-icons/fa";
import backgroundImage from "../../assets/images/wave-bg.jpg";
import styles from "./style.module.css";

export function HomePage() {
  const data = [
    {
      image: <BiHome />,
      title: "Building",
      strong: "Design",
      content: "Lorem ipsum",
    },
    {
      image: <BiBuildings />,
      title: "Space",
      strong: "Planning",
      content: "Lorem ipsum",
    },
    {
      image: <FaRulerCombined />,
      title: "Unique",
      strong: "Architecture",
      content: "Lorem ipsum",
    },
    {
      image: <RiCompasses2Fill />,
      title: "Sample",
      strong: "Headline",
      content: "Lorem ipsum",
    },
  ];

  return (
    <div className={styles.container}>
      <Header />
      <main
        className={styles.content}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <section className={styles.cards}>
          {data.map((item) => (
            <Card
              image={item.image}
              title={item.title}
              strong={item.strong}
              content={item.content}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
