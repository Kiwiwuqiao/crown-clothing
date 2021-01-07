import { convertCollectionsSnapshotToMap, firestore } from "../../../firebase/firebase.utils"
import ShopActionTypes from "./shop.types"


export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectiionsSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection("collections")
        dispatch(fetchCollectionsStart())

        collectionRef
            .get()
            .then((snapshot) => {
                const collectionMap = convertCollectionsSnapshotToMap(snapshot)
                dispatch(fetchCollectiionsSuccess(collectionMap))
            })
            .catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}