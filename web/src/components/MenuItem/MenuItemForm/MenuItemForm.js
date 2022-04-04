import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const MenuItemForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.menuItem?.id)
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
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.menuItem?.name}
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
          defaultValue={props.menuItem?.price}
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
          defaultValue={props.menuItem?.profits}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="profits" className="rw-field-error" />

        <Label
          name="categoryId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Category id
        </Label>

        <NumberField
          name="categoryId"
          defaultValue={props.menuItem?.categoryId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="categoryId" className="rw-field-error" />

        <Label
          name="deleted"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Deleted
        </Label>

        <CheckboxField
          name="deleted"
          defaultChecked={props.menuItem?.deleted}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="deleted" className="rw-field-error" />

        <Label
          name="showQuantityPicker"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Show quantity picker
        </Label>

        <CheckboxField
          name="showQuantityPicker"
          defaultChecked={props.menuItem?.showQuantityPicker}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="showQuantityPicker" className="rw-field-error" />

        <Label
          name="showOnPOS"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Show on pos
        </Label>

        <CheckboxField
          name="showOnPOS"
          defaultChecked={props.menuItem?.showOnPOS}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="showOnPOS" className="rw-field-error" />

        <Label
          name="showOnSite"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Show on site
        </Label>

        <CheckboxField
          name="showOnSite"
          defaultChecked={props.menuItem?.showOnSite}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="showOnSite" className="rw-field-error" />

        <Label
          name="HasSides"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Has sides
        </Label>

        <CheckboxField
          name="HasSides"
          defaultChecked={props.menuItem?.HasSides}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="HasSides" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MenuItemForm
