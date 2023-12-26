import { request } from "../func";
import { getCookie } from "../cookie";
import { IIngredient } from "../../services/types/ingredients";

interface IGetData{
  success: boolean
  data: IIngredient[]
}

export const getData = () => {
  return request<IGetData>({}, "ingredients").then((data) => data.data);
};
export const createOrderApi = (ingredients: string[]) => {

  return request(
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": getCookie('accessToken')
      },
      body: JSON.stringify({
        ingredients: ingredients,
      }),
    },
    "orders"
  );
};
