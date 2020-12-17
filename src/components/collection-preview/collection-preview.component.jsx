import CollectionItem from "../collection-item/collection-item.component"
import { CollectionPreviewContainer } from "./collection-preview.styles"

const CollectionPreview = ({ title, items, numOfItems }) => (
    <CollectionPreviewContainer>
        <h1>{title.toUpperCase()}</h1>
        <div>
            {items.filter((item, index) => index < 4).map((item) => <CollectionItem key={item.id} item={item} />)}
        </div>
    </CollectionPreviewContainer>
)

export default CollectionPreview