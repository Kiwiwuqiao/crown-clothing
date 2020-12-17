import { connect } from "react-redux"
import { addItem, clearItemFromCart, removeItem } from "../../redux/reducers/cart/cart.actions"
import { CheckoutItemContainer, ImageContainer, QuantityContainer, RemoveButtonContainer, TextContainer } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
    const { name, quantity, price, imageUrl } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item" />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => {
                    addItem(cartItem)
                }}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)