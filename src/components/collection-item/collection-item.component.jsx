import { connect } from "react-redux"
import { addItem } from "../../redux/reducers/cart/cart.actions"
import { AddButton, BackgroundImage, CollectionFooterContainer, CollectionItemContainer, NameContainer, PriceContainer } from "./collection-item.styles"

const CollectionItem = ({ item, addItem }) => {
    const { imageUrl, name, price } = item
    return (
        <CollectionItemContainer>
            <BackgroundImage style={{ BackgroundImage: `url(${imageUrl})` }} imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton inverted onClick={() => addItem(item)}>Add to cart</AddButton>
        </CollectionItemContainer>
    )
}



const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)