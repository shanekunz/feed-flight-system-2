import { routes, Link } from '@redwoodjs/router'
import { Grid, GridItem } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const BlogLayout = ({ children }) => {
  return (
    <>
      <Tabs>
        <TabList>
          <Link to={routes.home()}>
            <Tab>Home</Tab>
          </Link>
          <Link to={routes.about()}>
            <Tab>About</Tab>
          </Link>
          <Link to={routes.contact()}>
            <Tab>Contact</Tab>
          </Link>
        </TabList>
      </Tabs>
      {children}
    </>
  )
}

export default BlogLayout
