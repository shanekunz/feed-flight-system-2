import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  RadioField,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const DiscountForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.discount?.id)
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
          name="discountCode"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Discount code
        </Label>

        <TextField
          name="discountCode"
          defaultValue={props.discount?.discountCode}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="discountCode" className="rw-field-error" />

        <Label
          name="expirationDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Expiration date
        </Label>

        <DatetimeLocalField
          name="expirationDate"
          defaultValue={formatDatetime(props.discount?.expirationDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="expirationDate" className="rw-field-error" />

        <Label
          name="discountType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Discount type
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="discount-discountType-0"
            name="discountType"
            defaultValue="FIXED"
            defaultChecked={props.discount?.discountType?.includes('FIXED')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Fixed</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="discount-discountType-1"
            name="discountType"
            defaultValue="PERCENT"
            defaultChecked={props.discount?.discountType?.includes('PERCENT')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Percent</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="discount-discountType-2"
            name="discountType"
            defaultValue="MENU_ITEM"
            defaultChecked={props.discount?.discountType?.includes('MENU_ITEM')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Menu Item</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="discount-discountType-3"
            name="discountType"
            defaultValue="CATEGORY"
            defaultChecked={props.discount?.discountType?.includes('CATEGORY')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Category</div>
        </div>

        <FieldError name="discountType" className="rw-field-error" />

        <Label
          name="categoryId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Category id
        </Label>

        <NumberField
          name="categoryId"
          defaultValue={props.discount?.categoryId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="categoryId" className="rw-field-error" />

        <Label
          name="menuItemId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Menu item id
        </Label>

        <NumberField
          name="menuItemId"
          defaultValue={props.discount?.menuItemId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="menuItemId" className="rw-field-error" />

        <Label
          name="numberValue"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Number value
        </Label>

        <NumberField
          name="numberValue"
          defaultValue={props.discount?.numberValue}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="numberValue" className="rw-field-error" />

        <Label
          name="orderTotalThreshold"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Order total threshold
        </Label>

        <NumberField
          name="orderTotalThreshold"
          defaultValue={props.discount?.orderTotalThreshold}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="orderTotalThreshold" className="rw-field-error" />

        <Label
          name="deleted"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Deleted
        </Label>

        <CheckboxField
          name="deleted"
          defaultChecked={props.discount?.deleted}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="deleted" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default DiscountForm
