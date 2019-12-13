import React from "react"

import Page, {
  SectionHeading,
  LargeHeading,
  Subheading,
  Heading,
  Paragraph,
  LargeSubheading,
} from "../../components/Page"
import Form from "../../components/Form"

class Data extends React.Component {
  render() {
    return (
      <Page>
        <SectionHeading>
          <LargeHeading>Private Liability Insurance</LargeHeading>
          <Heading>
            Tell us something about you and we'll find the best options
          </Heading>
        </SectionHeading>

        <Form />
      </Page>
    )
  }
}

export default Data
