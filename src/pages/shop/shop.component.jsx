import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import { fetchCollectionsStart } from '../../redux/reducers/shop/shop.actions';
import CollectionPageContainer from '../collection/collection.container';


const ShopPage = ({ fetchCollectionsStart, match }) => {

    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])


    return (
        <div className="shop-page">
            <Route exact path={match.path} component={CollectionOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)