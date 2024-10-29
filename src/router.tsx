import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import HomeView from '@/views/HomeView';
import AboutView from '@/views/AboutView';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeView />} />
      <Route path="/about" element={<AboutView />} />
    </>
  )
);

export default router;
