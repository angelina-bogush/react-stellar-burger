import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef } from "react";

export const MyInput = ({value, setValue, icon, placeholder, type, input}) => {
 
  switch (input) {
    case 'email':
      return (
      <EmailInput
        onChange={e => setValue(e.target.value)}
        value={value}
        name={'email'}
        placeholder={placeholder}
        isIcon={true}
        extraClass="mb-2"
        error={false}
      />
      );
    case 'password':
      return (
        <PasswordInput
          placeholder={placeholder}
          error={false}
          onChange={e => setValue(e.target.value)}
          value={value}
          name={'name'}
          size={'default'}
          icon={icon}
          extraClass="ml-1"
        />
      );
    default:
      return (
        <Input
          type={type}
          placeholder={placeholder}
          onChange={e => setValue(e.target.value)}
          icon={icon}
          value={value}
          name={'name'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="ml-1"
        />
      );
      }
}