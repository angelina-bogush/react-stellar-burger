import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useRef } from "react";

export const MyInput = ({value, setValue, icon, placeholder, type}) => {
 
return(
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
)

}