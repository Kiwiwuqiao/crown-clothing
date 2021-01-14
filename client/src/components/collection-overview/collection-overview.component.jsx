import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/reducers/shop/shop.selectors'
import CollectionPreview from "../collection-preview/collection-preview.component"
import { CollectionOverviewContainer } from './collection-overview.styles'

const CollectionsOverview = ({ collections }) => (
    <CollectionOverviewContainer>
        {collections.map(({
            id,
            ...otherCollectionProps
        }) => (<CollectionPreview key={id} {...otherCollectionProps} />))}
    </CollectionOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)