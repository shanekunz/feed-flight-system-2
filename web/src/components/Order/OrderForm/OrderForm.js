import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  RadioField,
  CheckboxField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const OrderForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.order?.id)
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

        <FieldError name="zip" className="rw-field-error" />

        <Label
          name="serviceMethod"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Service method
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="order-serviceMethod-0"
            name="serviceMethod"
            defaultValue="DELIVERY"
            defaultChecked={props.order?.serviceMethod?.includes('DELIVERY')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Delivery</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="order-serviceMethod-1"
            name="serviceMethod"
            defaultValue="WALK_IN"
            defaultChecked={props.order?.serviceMethod?.includes('WALK_IN')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Walk In</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="order-serviceMethod-2"
            name="serviceMethod"
            defaultValue="CARRYOUT"
            defaultChecked={props.order?.serviceMethod?.includes('CARRYOUT')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Carryout</div>
        </div>

        <FieldError name="serviceMethod" className="rw-field-error" />

        <Label
          name="paymentMethod"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Payment method
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="order-paymentMethod-0"
            name="paymentMethod"
            defaultValue="CREDIT_ONLINE"
            defaultChecked={props.order?.paymentMethod?.includes(
              'CREDIT_ONLINE'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Credit Online</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="order-paymentMethod-1"
            name="paymentMethod"
            defaultValue="CREDIT_TERMINAL"
            defaultChecked={props.order?.paymentMethod?.includes(
              'CREDIT_TERMINAL'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Credit Terminal</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="order-paymentMethod-2"
            name="paymentMethod"
            defaultValue="CASH"
            defaultChecked={props.order?.paymentMethod?.includes('CASH')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Cash</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="order-paymentMethod-3"
            name="paymentMethod"
            defaultValue="OPEN"
            defaultChecked={props.order?.paymentMethod?.includes('OPEN')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Open</div>
        </div>

        <FieldError name="paymentMethod" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.order?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="phone"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phone
        </Label>

        <TextField
          name="phone"
          defaultValue={props.order?.phone}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="phone" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.order?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="address1"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Address1
        </Label>

        <TextField
          name="address1"
          defaultValue={props.order?.address1}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="address1" className="rw-field-error" />

        <Label
          name="address2"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Address2
        </Label>

        <TextField
          name="address2"
          defaultValue={props.order?.address2}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="address2" className="rw-field-error" />

        <Label
          name="city"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          City
        </Label>

        <TextField
          name="city"
          defaultValue={props.order?.city}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="city" className="rw-field-error" />

        <Label
          name="state"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          State
        </Label>

        <TextField
          name="state"
          defaultValue={props.order?.state}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="state" className="rw-field-error" />

        <Label
          name="zip"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Zip
        </Label>

        <TextField
          name="zip"
          defaultValue={props.order?.zip}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <Label
          name="instructions"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Instructions
        </Label>

        <TextField
          name="instructions"
          defaultValue={props.order?.instructions}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="instructions" className="rw-field-error" />

        <Label
          name="placedOnPOS"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Placed on pos
        </Label>

        <CheckboxField
          name="placedOnPOS"
          defaultChecked={true}
          disabled="disabled"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="placedOnPOS" className="rw-field-error" />

        <Label
          name="deliveryFee"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Delivery fee
        </Label>

        <TextField
          name="deliveryFee"
          defaultValue={props.order?.serviceMethod == 'delivery' ? 3 : 0}
          className="rw-input"
          disabled="disabled"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="deliveryFee" className="rw-field-error" />

        <Label
          name="tip"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tip
        </Label>

        <TextField
          name="tip"
          defaultValue={props.order?.tip}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="tip" className="rw-field-error" />

        <Label
          name="driver"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Driver
        </Label>

        <NumberField
          name="driver"
          defaultValue={props.order?.driver}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="driver" className="rw-field-error" />

        <Label
          name="discountAmount"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Discount amount
        </Label>

        <TextField
          name="discountAmount"
          defaultValue={0}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="discountAmount" className="rw-field-error" />

        <Label
          name="discountId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Discount id
        </Label>

        <NumberField
          name="discountId"
          defaultValue={props.order?.discountId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="discountId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default OrderForm
