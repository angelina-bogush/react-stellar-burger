import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-tab.module.css";

interface IBurgerTabProps{
  activeTab: string
  setActiveTab: (activeTab: string) => void
}
const BurgerTab = ({ activeTab, setActiveTab }: IBurgerTabProps) => {
  return (
    <div className={styles.container}>
      <Tab
        value="Bun"
        active={activeTab === "Bun"}
        onClick={() => setActiveTab("Bun")}
      >
        Булки
      </Tab>
      <Tab
        value="Sauce"
        active={activeTab === "Sauce"}
        onClick={() => setActiveTab("Sauce")}
      >
        Соусы
      </Tab>
      <Tab
        value="Main"
        active={activeTab === "Main"}
        onClick={() => setActiveTab("Main")}
      >
        Начинки
      </Tab>
    </div>
  );
};
export default BurgerTab;
