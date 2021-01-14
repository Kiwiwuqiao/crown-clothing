
import { connect } from "react-redux"
import { toggleCartHidden } from "../../redux/reducers/cart/cart.actions"
import { selectCartItemsCount } from "../../redux/reducers/cart/cart.selectors"
import { createStructuredSelector } from "reselect"
import { CartIconContainer, ItemCountContainer, ShoppingIcon } from "./cart-icon.styles"

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)