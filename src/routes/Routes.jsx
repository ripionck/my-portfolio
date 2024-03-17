import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import { Home } from '../pages/Home/Home';
import NotFound from '../pages/Common/NotFound';
import ELit from '../pages/Home/projects/ELit';
import Metro from '../pages/Home/projects/Metro';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'e-Lit_emporium', element: <ELit /> },
      { path: 'metro-express', element: <Metro /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
