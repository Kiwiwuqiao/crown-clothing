import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/reducers/user/user.selectors";
import { selectCartHidden } from "../../redux/reducers/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from "./header.styles";

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/contact">CONTACT</OptionLink>
            {currentUser
                ? <OptionLink as="div" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                : <OptionLink to="/signin">SIGN IN</OptionLink>}
            <CartIcon />
        </OptionsContainer>
        {hidden || <CartDropdown />}
    </HeaderContainer>
)

const mapStatesToProps = createStructuredSelector({ currentUser: selectCurrentUser, hidden: selectCartHidden })

export default connect(mapStatesToProps)(Header)
