
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { routerConfig } from "./router/config/routerConfig";
const router = createBrowserRouter(routerConfig)
export const App = () =>  {
    return ( 
        <RouterProvider router={router}/>
     );
}

