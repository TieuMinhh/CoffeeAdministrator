import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import List from "./pages/list/List";
import Order from "./pages/Order/Order";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="users">
              <Route index element={<List />} />
              {/* <Route path=":userId" element={<Single />} /> */}
              <Route
                path="new"
                // element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

            <Route path="products">
              <Route index element={<List />} />
              {/* <Route path=":productId" element={<Single />} /> */}
              <Route
                path="new"
                // element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>

            <Route path="category">
              <Route index element={<List />} />
              {/* <Route path=":categoryId" element={<Single />} /> */}
              <Route
                path="order"
                // element={<New inputs={productInputs} title="List Order" />}
              />
            </Route>

            <Route path="order">
              <Route index element={<Order />} />
              {/* <Route path=":orderId" element={<Single />} /> */}
              <Route
                path="order"
                // element={<New inputs={productInputs} title="List Order" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
