import { HashRouter, Route, Routes } from "react-router-dom";
import Demo from "./Demo";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/product/:id/:name" element={<ProductPage></ProductPage>}></Route>
          <Route path="/profile/:facebook/:youtube" element={<ProfilePage></ProfilePage>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;  