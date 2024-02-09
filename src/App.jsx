import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Error, HomeLayout, Login, Schedule, WorkPlace} from "./pages/index.js";
import {store} from "./store/index.js";

import {loader as roleLoader} from './pages/WorkPlace'
import {loader as scheduleLoader} from './pages/Schedule'

import { action as loginAction } from './pages/Login';
import {action as scheduleAction} from './pages/Schedule'
import {action as workPlaceAction} from './pages/WorkPlace'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <WorkPlace />,
                errorElement: <Error/>,
                loader: roleLoader(store),
                action: workPlaceAction(store),
                // children: [
                //     {
                //         path: 'settings',
                //         element: <>Settings</>,
                //         errorElement: <Error />,
                //
                //     }
                // ]
            },
            {
                path: 'settings',
                errorElement: <Error />,
                element: <>Settings</>
            },
            {
                path: 'schedule',
                element: <Schedule/>,
                errorElement: <Error />,
                loader: scheduleLoader(store),
                action: scheduleAction(store)
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>,
        errorElement: <Error />,
        action: loginAction(store),
    }
])
const App = () => {
  return (
      <RouterProvider router={router} />
  )
}
export default App
