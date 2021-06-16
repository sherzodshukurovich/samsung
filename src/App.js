import React from 'react';
import {BrowserRouter, Switch,Route} from "react-router-dom";
import CartC from "./CartC";
import Imageheader from "./components/Imageheader";
import Home from "./components/Home";
import CaruselPopular from "./components/CaruselPopular";
import Layout from "./components/Layout";
import HomeJs from "./pages/HomeJs";
import Counter from "./pages/Counter";
import Img from "./pages/Img";
import CartPop from "./pages/CartPop";
import { ToastContainer } from 'react-toastify';
import CaruselKros from "./components/CaruselKros";
import ProyectBody from "./components/ProyectBody";
import Outlet from "./pages/Outlet";
import Proyectfooter from "./pages/Proyectfooter";
import FooterBody from "./pages/FooterBody";
function App(props) {
    return (
          <>
              <Switch>
                  <Route exact path="/" component={HomeJs}/>
                  <Route exact path='/img' component={Imageheader}/>
                  <Route exact path="/coc" component={Img}/>
                  <Route exact path="/port" component={CartPop}/>
                  <Route exact path="/krosovka" component={CaruselKros}/>
                  <Route exact path="/cardb" component={Outlet}/>
                  <Route exact path="/footer" component={Proyectfooter}/>
                  <Route exact path="/baby" component={FooterBody}/>
              </Switch>

              <ToastContainer/>

          </>


    );
}

export default App;