import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import {
  Header
} from '../Components';
import {
  HomeScreen,
  PicturesScreen,
} from './';

class Layout extends Component {
  render() {
    return (
      <div>
        <Route path={`/`} component={Header} />
        <div className="contentWrapper">
          <Switch>
            <Route path={`/`} exact={true} component={HomeScreen} />
            <Route path={`/pictures`} exact={true} component={PicturesScreen} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(Layout);
