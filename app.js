import  React  from 'react';
import  ReactDOM  from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import ItemDetails from './src/components/ItemDetails';

const AppLayout = () => {
    return(
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path : '/',
        element: <AppLayout />,
    children: [
    {
        path : '/',
        element: <Body />
    },
   {
    path : '/About us',
    element: <About />
   },
   {
    path : '/Contact us',
    element: <Contact />
   },
   {
    path : '/restaurants/:resID',
    element: <ItemDetails />
   }
    ],
    errorElement: <Error />
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);