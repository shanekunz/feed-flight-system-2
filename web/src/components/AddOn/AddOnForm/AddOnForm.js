import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  RadioField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const AddOnForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.addOn?.id)
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
          name="menuItemId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Menu item id
        </Label>

        <NumberField
          name="menuItemId"
          defaultValue={props.addOn?.menuItemId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="menuItemId" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.addOn?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>

        <TextField
          name="price"
          defaultValue={props.addOn?.price}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="price" className="rw-field-error" />

        <Label
          name="profits"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Profits
        </Label>

        <TextField
          name="profits"
          defaultValue={props.addOn?.profits}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="profits" className="rw-field-error" />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="addOn-type-0"
            name="type"
            defaultValue="SIZE"
            defaultChecked={props.addOn?.type?.includes('SIZE')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Size</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="addOn-type-1"
            name="type"
            defaultValue="TOPPING"
            defaultChecked={props.addOn?.type?.includes('TOPPING')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Topping</div>
        </div>

        <FieldError name="type" className="rw-field-error" />

        <Label
          name="deleted"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Deleted
        </Label>

        <CheckboxField
          name="deleted"
          defaultChecked={props.addOn?.deleted}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="deleted" className="rw-field-error" />

        <Label
          name="sortPosition"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sort position
        </Label>

        <NumberField
          name="sortPosition"
          defaultValue={props.addOn?.sortPosition}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="sortPosition" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AddOnForm
