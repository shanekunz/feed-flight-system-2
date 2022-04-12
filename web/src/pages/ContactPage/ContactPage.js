import { MetaTags } from '@redwoodjs/web'

import { Toaster } from '@redwoodjs/web/toast'


const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Toaster />
    </>
  )
}

export default ContactPage
