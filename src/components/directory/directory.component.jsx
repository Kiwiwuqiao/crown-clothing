
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectDirectorySections } from "../../redux/reducers/directory/directory.selectors"
import MenuItem from "../menu-item/menu-item.component"
import "./directory.styles.scss"

const Directory = ({ sections }) => {

  return (
    <div className='directory-menu'>

      {sections
        .map((section) => <MenuItem key={section.id} {...section} />)}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})



export default connect(mapStateToProps)(Directory)