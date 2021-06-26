import React from 'react';
import Posts from "./pages/Posts";
import {Switch,Route} from 'react-router'
import Home from "./components/Home";
import MorePage from "./components/MorePage";
import ReduserCrud from "./UseReduserCrud/ReduserCrud";
import ReduserCrudProject from "./UseReduserCrud/ReduserCrudProject";
function App(props) {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/post' component={Posts}/>
                <Route exact path='/post/:id' component={MorePage}/>
            </Switch>

        </div>
    );
}

export default App;