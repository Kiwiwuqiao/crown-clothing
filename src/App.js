import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { checkUserSession } from './redux/reducers/user/user.actions';
import { selectCurrentUser } from './redux/reducers/user/user.selectors';

class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount() {

    const { checkUserSession } = this.props
    checkUserSession()

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {

    //     const userRef = await createUsersProfile(userAuth)

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         currentUser: {
    //           id: snapShot.id,
    //           ...snapShot.data()
    //         }
    //       })

    //     })

    //   } else {
    //     setCurrentUser(userAuth)
    //     // console.log(this.state);
    //   }

    // })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />} />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
