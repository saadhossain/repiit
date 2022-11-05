import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Routes } from './Router/Routes';

function App() {
  const router = Routes;
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
