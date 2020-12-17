
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectDirectorySections } from "../../redux/reducers/directory/directory.selectors"
import MenuItem from "../menu-item/menu-item.component"
import { DirectoryMenuContainer } from "./directory.styles"

const Directory = ({ sections }) => {

  return (
    <DirectoryMenuContainer>

      {sections
        .map((section) => <MenuItem key={section.id} {...section} />)}
    </DirectoryMenuContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})



export default connect(mapStateToProps)(Directory)