import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Tasks from '../pages/Tasks';
import Chat from '../pages/Chat';
import Settings from '../pages/Settings';
import Profile from '../pages/Profile';
import PrivateRoute from '../components/layouts/PrivateRoute';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Archive from '../pages/Archive';
const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Tasks />,
      },
      {
        path: '/chat',
        element: <Chat />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/archive',
        element: <Archive />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Register />,
  },
]);

export default routes;
