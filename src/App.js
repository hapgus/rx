
import { Route, Routes } from "react-router";
import MainLayout from './layout/MainLayout';
import Homepage from './pages/Main/Home/Homepage';


const App = () => {

  const renderMainRoutes = () => (
    <>
     <Route index element={<Homepage />} />
    </>
  );

  return(
    <Routes>
      <Route path='/' element={<MainLayout />}>
      {renderMainRoutes()}
      </Route>
    </Routes>
  )
}


export default App;
