import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Common/Layout';
import NotFound from '../components/Common/NotFound';
import Main from '../pages/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Main /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
