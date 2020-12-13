import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { connect } from "react-redux"
import { toggleCartHidden } from "../../redux/reducers/cart/cart.actions"
import { selectCartItemsCount } from "../../redux/reducers/cart/cart.selectors"
import { createStructuredSelector } from "reselect"

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div onClick={toggleCartHidden} className="cart-icon">
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)