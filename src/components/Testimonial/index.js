import React from "react"
import { Container, Avatar, AvatarContainer, Name, Description } from "./style"
class Testimonial extends React.Component {
  render() {
    return (
      <Container>
        <AvatarContainer>
          <Avatar src={this.props.avatar} />
          <Name>{this.props.avatarName}</Name>
        </AvatarContainer>
        <Description>{this.props.description}</Description>
      </Container>
    )
  }
}

export default Testimonial
