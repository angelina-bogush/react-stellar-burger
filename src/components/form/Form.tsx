import { FormEvent, ReactNode } from "react";
import styles from "./Form.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
interface IFormProps{
title: string
buttonText: string
onSubmit: (e: FormEvent) => void
children: ReactNode
}

export const Form = ({ title, buttonText, onSubmit, children }: IFormProps) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <p className="text text_type_main-medium">{title}</p>
      {children}
      <Button htmlType="submit" type="primary" size="medium">
        {buttonText}
      </Button>
    </form>
  );
};
