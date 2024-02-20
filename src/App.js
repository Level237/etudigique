import './App.css';
import { RouterProvider } from 'react-router-dom';
import {routes} from "./routes/web"
function App() {
  return <RouterProvider router={routes}/>
}

export default App;
