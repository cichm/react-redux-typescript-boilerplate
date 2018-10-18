// import * as React from 'react';
//
// import Routes from '../../Routes';
// import Navbar from '../Navbar';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Navbar />
//         <Routes />
//       </div>
//     );
//   }
// }

// export default App;

import * as React from "react";
// import * as routes from "../../constants/routes";
import * as routes from "../../Routes"
import { Account } from "../../pages/Account";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { firebase } from "../../actions/auth/firebase";
import { Home } from "../../pages/Home";
import { Landing } from '../../pages/Landing';
import { Navigation } from '../Navigation/Navigation';
import { PasswordForget } from "../../pages/PasswordForget";
import { SignIn } from '../../pages/SignIn';
import { SignUp } from "../../pages/SignUp";
import { withAuthentication } from "../../actions/auth/firebase/withAuthentication";

class App extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  public componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  public render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <hr />
          <Switch>
            <Route exact={true} path={routes.LANDING} component={Landing} />
            <Route exact={true} path={routes.SIGN_UP} component={SignUp} />
            <Route exact={true} path={routes.SIGN_IN} component={SignIn} />
            <Route
              exact={true}
              path={routes.PASSWORD_FORGET}
              component={PasswordForget}
            />
            <Route exact={true} path={routes.HOME} component={Home} />
            <Route exact={true} path={routes.ACCOUNT} component={Account} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default withAuthentication(App);
