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
          name="squareNonce"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Square nonce
        </Label>

        <TextField
          name="squareNonce"
          defaultValue={props.order?.squareNonce}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="squareNonce" className="rw-field-error" />

        <Label
          name="total"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total
        </Label>

        <TextField
          name="total"
          defaultValue={props.order?.total}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="total" className="rw-field-error" />

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

        <FieldError name="zip" className="rw-field-error" />

        <Label
          name="serviceMethod"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Service method
        </Label>

        <TextField
          name="serviceMethod"
          defaultValue={props.order?.serviceMethod}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="serviceMethod" className="rw-field-error" />

        <Label
          name="paymentMethod"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Payment method
        </Label>

        <TextField
          name="paymentMethod"
          defaultValue={props.order?.paymentMethod}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="paymentMethod" className="rw-field-error" />

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
          name="status"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="order-status-0"
            name="status"
            defaultValue="OPEN"
            defaultChecked={props.order?.status?.includes('OPEN')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Open</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="order-status-1"
            name="status"
            defaultValue="CLOSED"
            defaultChecked={props.order?.status?.includes('CLOSED')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Closed</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="order-status-2"
            name="status"
            defaultValue="CANCELED"
            defaultChecked={props.order?.status?.includes('CANCELED')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Canceled</div>
        </div>

        <FieldError name="status" className="rw-field-error" />

        <Label
          name="placedOnPOS"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Placed on pos
        </Label>

        <CheckboxField
          name="placedOnPOS"
          defaultChecked={props.order?.placedOnPOS}
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
          defaultValue={props.order?.deliveryFee}
          className="rw-input"
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
          name="creditTerminalStatus"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Credit terminal status
        </Label>

        <TextField
          name="creditTerminalStatus"
          defaultValue={props.order?.creditTerminalStatus}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="creditTerminalStatus" className="rw-field-error" />

        <Label
          name="marketingCampaignId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Marketing campaign id
        </Label>

        <NumberField
          name="marketingCampaignId"
          defaultValue={props.order?.marketingCampaignId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="marketingCampaignId" className="rw-field-error" />

        <Label
          name="discountAmount"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Discount amount
        </Label>

        <TextField
          name="discountAmount"
          defaultValue={props.order?.discountAmount}
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

        <Label
          name="processedForMarketing"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Processed for marketing
        </Label>

        <CheckboxField
          name="processedForMarketing"
          defaultChecked={props.order?.processedForMarketing}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="processedForMarketing" className="rw-field-error" />

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
