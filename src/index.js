import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/style.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {BrowserRouter} from "react-router-dom";
import Store from "./Store";

import 'react-toastify/dist/ReactToastify.min.css'

ReactDOM.render(
  <BrowserRouter>
      <Store>
          <App/>
      </Store>

  </BrowserRouter>


   ,

  document.getElementById('root')
);


