import { Link } from "react-router-dom"

import "./header.styles.scss"

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/reducers/user/user.selectors";
import { selectCartHidden } from "../../redux/reducers/cart/cart.selectors";
import { createStructuredSelector } from "reselect";


const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {currentUser
                ? <div className="option" onClick={() => auth.signOut()} >SIGN OUT</div>
                : <Link className="option" to="/signin">SIGN IN</Link>}
            <CartIcon />
        </div>
        {hidden || <CartDropdown />}

    </div >
)

const mapStatesToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})



export default connect(mapStatesToProps)(Header)
