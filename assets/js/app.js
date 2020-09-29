import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../scss/main.scss";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ShopPage from "./pages/ShopPage";
import Navbar from "./components/Navbar";
import ShowArticle from "./pages/ShowArticle";
import Cart from "./pages/Cart";

import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <HashRouter>
            <Navbar />
            <main>
              <Switch>
                <Route path="/shop/:category/:type" component={ShopPage} />
                <Route path="/shop/:category" component={ShopPage} />
                <Route path="/products/:id" component={ShowArticle} />
                <Route path="/cart" component={Cart} />
                <Route path="/" component={HomePage} />
              </Switch>
            </main>
          </HashRouter>
          <ToastContainer position="bottom-right" />
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
};

const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
