import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Order from "./pages/Order/Order";
import User from "./pages/User/User";
import Product from "./pages/Product/Product";
import Category from "./pages/Category/Category";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
// import OrderDetail from "./components/OrderTable/OrderDetail";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="user">
              <Route index element={<User />} />
              {/* <Route path=":userId" element={<User />} /> */}
              <Route
                path="user"
                // element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

            {/* <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route> */}

            <Route path="category">
              <Route index element={<Category />} />
              {/* <Route path=":categoryId" element={<Single />} /> */}
              <Route path="detail" element={<Product />} />
            </Route>

            <Route path="product">
              <Route index element={<Product />} />
              {/* <Route path=":productId" element={<Product />} /> */}
              <Route
                path="product"
                // element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>

            <Route path="order">
              <Route index element={<Order />} />
              {/* <Route path=":orderId" element={<Single />} /> */}
              {/* <Route path="detail" element={<OrderDetail />} /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
