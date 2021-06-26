import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {BrowserRouter} from "react-router-dom";
ReactDOM.render(

<BrowserRouter>
    <App/>
</BrowserRouter>


    ,

  document.getElementById('root')
);


