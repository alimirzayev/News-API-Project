import { Fragment, useState, useEffect } from "react";
import { apiKeys } from "./interceptor/interceptor";
import Header from './components/Header'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { Context } from "./context/Context";
import WithAxios from "./interceptor/interceptor";
import Content from "./pages/Content";

function App() {
  const [data, setData] = useState();

  return (
    <Context.Provider value={{data, setData}}>
      <WithAxios>
        <Fragment>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/country/:id" element={<Detail />}></Route>
            <Route exact path="/news/:id" element={<Content />}></Route>
          </Routes>
        </Fragment>
      </WithAxios>
    </Context.Provider>
  );
}

export default App;
