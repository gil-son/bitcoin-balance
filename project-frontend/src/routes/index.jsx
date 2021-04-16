import React from 'react';

// Libraries
import { Switch, Route } from 'react-router-dom';

//Components
// Menu
import Home from '../pages/Home';


const Routes = () =>{

    return(
        <>
            <Switch>
                 {/* Menu */}
                <Route path="/" exact component={Home} />
            </Switch>
        </>
    );
}

export default Routes;