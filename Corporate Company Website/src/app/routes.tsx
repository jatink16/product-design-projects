import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Collections } from './pages/Collections';
import { Heritage } from './pages/Heritage';
import { Craftsmanship } from './pages/Craftsmanship';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'collections', Component: Collections },
      { path: 'heritage', Component: Heritage },
      { path: 'craftsmanship', Component: Craftsmanship },
      { path: 'contact', Component: Contact },
      { path: '*', Component: NotFound },
    ],
  },
]);
