import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Npsub from "./Npsub";
import Npans from "./Npans";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./Main";
import Not from "./Not";

function New() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/nptel" element={<Npsub />}></Route>
          <Route exact path="/ans" element={<Npans />}></Route>
          <Route exact path="/NotAvailable" element={<Not />}></Route>
          <Route element={<Not/>} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
export default New;
