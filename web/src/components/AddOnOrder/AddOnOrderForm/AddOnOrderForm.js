import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const AddOnOrderForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.addOnOrder?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="menuItemOrderId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Menu item order id
        </Label>

        <NumberField
          name="menuItemOrderId"
          defaultValue={props.addOnOrder?.menuItemOrderId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="menuItemOrderId" className="rw-field-error" />

        <Label
          name="addOnId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Add on id
        </Label>

        <NumberField
          name="addOnId"
          defaultValue={props.addOnOrder?.addOnId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="addOnId" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>

        <TextField
          name="price"
          defaultValue={props.addOnOrder?.price}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="price" className="rw-field-error" />

        <Label
          name="leftSide"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Left side
        </Label>

        <CheckboxField
          name="leftSide"
          defaultChecked={props.addOnOrder?.leftSide}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="leftSide" className="rw-field-error" />

        <Label
          name="rightSide"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Right side
        </Label>

        <CheckboxField
          name="rightSide"
          defaultChecked={props.addOnOrder?.rightSide}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="rightSide" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AddOnOrderForm
