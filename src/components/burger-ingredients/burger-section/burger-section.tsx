import styles from "./burger-section.module.css";
import { forwardRef, ReactNode, LegacyRef } from "react";
interface IBurgerSectionProps{
  title: string
  children: ReactNode
}
const BurgerSection = forwardRef(({ title, children }: IBurgerSectionProps, ref: LegacyRef<HTMLHeadingElement>) => {
  return (
    <div className={styles.container}>
      <h2 className="text text_type_main-medium" ref={ref}>
        {title}
      </h2>
      <div className={styles.layout}>{children}</div>
    </div>
  );
});

export default BurgerSection;
