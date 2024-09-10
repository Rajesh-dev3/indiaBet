
import { RouterProvider } from "react-router-dom";
import { router } from './routes/PagesRoutes';
function App() {

  return (
    <>
    
      <RouterProvider router={router} />
    </>
  )
}

export default App
