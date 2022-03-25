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

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
      formMethods.reset()
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
              as={TextField}
              name="name"
              validation={{ required: true }}
              errorClassName="error"
            />
            <FormErrorMessage as={FieldError} name="name" className="error" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              as={TextField}
              name="email"
              validation={{ required: true }}
              errorClassName="error"
            />
            <FormErrorMessage as={FieldError} name="email" className="error" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea
              as={TextAreaField}
              name="message"
              validation={{ required: true }}
              errorClassName="error"
            />
            <FormErrorMessage
              as={FieldError}
              name="message"
              className="error"
            />
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
