import styles from './ProfileForm.module.css'
import { MyInput } from "../../form/input/MyInput";
import { getUserInfo } from '../../../utils/api';
import { changeUserInfoAction } from '../../../services/actions/login';
import { getUserInfoAction } from '../../../services/actions/login';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { getCookie } from '../../../utils/cookie';

export const ProfileForm = () => {
  const dispatch = useDispatch();
  const [valueEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("123456789");
  const [valueName, setValueName] = useState("");
  const [originalEmail, setOriginalEmail] = useState("");
  const [originalName, setOriginalName] = useState("");
  console.log(valueName);

  useEffect(() => {
    const setValues = async () => {
      const token = getCookie("accessToken");
      const data = await getUserInfo(token);
      setValueEmail(data.user.email);
      setValueName(data.user.name);
      setOriginalEmail(data.user.email);
      setOriginalName(data.user.name);
    };
    setValues();
  }, []);

  const updateUserInfoClick = () => {
    const form = {
      name: valueName,
      email: valueEmail,
    };
    dispatch(changeUserInfoAction(form));
  };
  const cancelUpdate = () => {
    setValueEmail(originalEmail);
    setValueName(originalName);
  };

  return (
    <form className={styles.form}>
      <MyInput
        type="text"
        placeholder={"Имя"}
        input="email"
        value={valueName}
        setValue={setValueName}
      />
      <MyInput
        type="email"
        placeholder={"Логин"}
        input={"email"}
        value={valueEmail}
        setValue={setValueEmail}
      />
      <MyInput
        type="password"
        placeholder={"Пароль"}
        input="password"
        icon="EditIcon"
        value={valuePassword}
        setValue={setValuePassword}
      />
      <div className={styles.buttons}>
        <Button type="secondary" size="medium" onClick={cancelUpdate}>
          Отмена
        </Button>
        <Button type="primary" onClick={updateUserInfoClick}>
          Сохранить
        </Button>
      </div>
    </form>
  );
};