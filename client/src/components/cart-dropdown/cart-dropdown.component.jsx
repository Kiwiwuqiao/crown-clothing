import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { createStructuredSelector } from "reselect"
import { toggleCartHidden } from "../../redux/reducers/cart/cart.actions"
import { selectCartItems } from "../../redux/reducers/cart/cart.selectors"
import CartItem from "../cart-item/cart-item.component"

import { CartDropdownButton, CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from "./cart-dropdown.styles"

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length
                ? cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>}
        </CartItemsContainer>
        <CartDropdownButton
            onClick={() => {
                cartItems.length && history.push('/checkout');
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({ cartItems: selectCartItems })

export default withRouter(connect(mapStateToProps)(CartDropdown))