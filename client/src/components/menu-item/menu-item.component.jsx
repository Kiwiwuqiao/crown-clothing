import { withRouter } from "react-router-dom";
import { BackgroundImageContainer, ContentContainer, ContentSubtitle, ContentTitle, MenuItemContainer } from "./menu-item.styles";

const MenuItem = ({ size, title, imageUrl, history, linkTo }) => {

  return (
    <MenuItemContainer size={size} onClick={() => { history.push(`${linkTo}`) }}>
      <BackgroundImageContainer
        style={{
          backgroundImage: `url(${imageUrl})`
        }} />
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>

    </MenuItemContainer>
  )
}

export default withRouter(MenuItem);