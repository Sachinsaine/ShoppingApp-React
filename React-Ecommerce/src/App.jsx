import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { Layout } from "./pages/Layout";
import { Category } from "./pages/Category";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="" element={<Layout />}>
          <Route exact path="/" element={<Shop />} />
          <Route exact path="/shop" element={<Category />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route exact path="/product" element={<Product />}>
            <Route exact path=":productId" element={<Product />} />
          </Route> */}
          <Route exact path="/cart" element={<Cart />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
