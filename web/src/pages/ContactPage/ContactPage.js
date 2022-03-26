import { MetaTags, useMutation } from '@redwoodjs/web'
import {
  FieldError,
  Form,
  TextField,
  TextAreaField,
  Submit,
  FormError,
  useForm,
} from '@redwoodjs/forms'
import { toast, Toaster } from '@redwoodjs/web/toast'
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  Container,
} from '@chakra-ui/react'
import { useState } from 'react'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()
  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }
  const [errorField, setErrorField] = useState()

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
      formMethods.reset()
    },
    onError: (error) => {
      setErrorField(error.toString().split(' ')[1])
      console.log(errorField)
    },
  })

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Toaster />
      <Container>
        <Form
          onSubmit={onSubmit}
          config={{ mode: 'onBlur' }}
          error={error}
          formMethods={formMethods}
        >
          <FormError error={error} wrapperClassName="form-error" />
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              isInvalid={errorField == 'name'}
              as={TextField}
              name="name"
            />
            <FormErrorMessage as={FieldError} name="name" />
          </FormControl>
          <FormControl isInvalid={errorField == 'email'}>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input as={TextField} name="email" />
            <FormErrorMessage as={FieldError} name="email" />
          </FormControl>
          <FormControl isInvalid={errorField == 'message'}>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea as={TextAreaField} name="message" />
            <FormErrorMessage as={FieldError} name="message" />
          </FormControl>
          <Button as={Submit} type="submit" disabled={loading} mt={4}>
            Save
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default ContactPage
