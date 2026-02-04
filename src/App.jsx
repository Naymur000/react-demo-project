import { BrowserRouter, Route, Routes } from "react-router-dom";
import Demo from "./Demo";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/product" element={<ProductPage></ProductPage>}></Route>
          <Route path="/Profile" element={<ProfilePage></ProfilePage>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;  