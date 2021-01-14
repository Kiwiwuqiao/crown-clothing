import { CartItemContainer, ItemDetailsContainer, CartItemImg, NameContainer } from "./cart-item.styles"

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <CartItemImg src={imageUrl} alt="item" />
        <ItemDetailsContainer>
            <NameContainer>{name}</NameContainer>
            <span className="price">{quantity} x ${price}</span>

        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem