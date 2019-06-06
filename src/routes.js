import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Navigation from './navigation/nav';
import Login from './Login/login';
import Register from './RegisterB/rb';
import Shows from './TradeShows/ts';
import First from './Home/home';
import Messages from'./Messages/messages';
const Routes =(props)=> {
        return(
                <Switch>
                    <Route  path='/'  exact component = {First}/>
                    <Route  path='/login'  exact component = {Login}/>
                    <Route path='/shows' exact component= {Shows}/>
                    <Route path='/register' exact component={Register}/>
                    <Route path='/messages' exact component={Messages}/>
                </Switch>
        )

}

export default Routes;
