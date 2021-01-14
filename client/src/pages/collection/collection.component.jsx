import { connect } from 'react-redux'

import CollectionItem from '../../components/collection-item/collection-item.component'
import { selectCollection } from '../../redux/reducers/shop/shop.selectors'
import { CollectionItemsContainer, CollectionPageContainer, CollectionTitle } from './collection.styles'

const CollectionPage = ({ collection }) => {
    const { title, items } = collection
    return (
        <CollectionPageContainer className="collection-page">
            <CollectionTitle className="title">{title}</CollectionTitle>

            <CollectionItemsContainer className="items">
                {items.map(item => <CollectionItem key={item.id} item={item} />)}
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
