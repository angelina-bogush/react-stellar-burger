import styles from "./Loader.module.css";
import { Circles } from "react-loader-spinner";

export const Loader = () => {
  return (
    <>
      <div className={styles.loader}></div>
      <div className={styles.wrapper}>
      <Circles
        height="100"
        width="200"
        color="blue"
        // ariaLabel="loading"
        // wrapperStyle
        // wrapperClass
      />
      </div>
    </>
  );
};
