import { Box, Button, Container } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const OrderPage = () => {
  return (
    <>
      <MetaTags title="Order" description="Order page" />
      <Container>
        <Button>Hi</Button>
      </Container>
    </>
  )
}

export default OrderPage
