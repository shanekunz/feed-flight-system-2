import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  RadioField,
  NumberField,
  Submit,
  InputField,
} from '@redwoodjs/forms'
import { useEffect, useState } from 'react'
import { useQuery } from '@redwoodjs/web'

const QUERY_ITEMS = gql`
  query FindMenuItems {
    menuItems {
      id
      name
      price
      profits
      categoryId
      deleted
      showQuantityPicker
      showOnPOS
      showOnSite
      HasSides
    }
  }
`
const OrderForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.order?.id)
  }

  const [service, setService] = useState(
    props.order ? props.order?.serviceMethod : 'WALK_IN'
  )
  const [payment, setPayment] = useState(
    props.order ? props.order?.paymentMethod : 'CASH'
  )
  const [total, setTotal] = useState(0)
  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])
  const [page, setPage] = useState(1)

  useQuery(QUERY_ITEMS, {
    onCompleted: function (r) {
      setItems(r.menuItems)
    },
  })

  useEffect(() => {
    var t = 0
    cart.forEach((i) => {
      t += i.price * i.quantity
    })
    //setTotal(t)
  }, [cart])

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        {page == 1 && (
          <>
            <div className="columns-1 md:columns-2 pt-4">
              <div style={{ height: '255px' }}>
                <Label
                  name="serviceMethod"
                  className="rw-label mt-0"
                  errorClassName="rw-label rw-label-error"
                >
                  Service method
                </Label>

                <button
                  type="button"
                  className={`rw-check-radio-items cursor-pointer pr-3 mt-2 ${
                    service == 'DELIVERY' ? 'checked' : ''
                  }`}
                  onClick={() => setService('DELIVERY')}
                >
                  <RadioField
                    id="order-serviceMethod-0"
                    name="serviceMethod"
                    defaultValue="DELIVERY"
                    checked={service.includes('DELIVERY')}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    onChange={(e) => setService(e.target.value)}
                  />

                  <div>Delivery</div>
                </button>

                <button
                  type="button"
                  className={`rw-check-radio-items cursor-pointer pr-3 mt-2 ${
                    service == 'WALK_IN' ? 'checked' : ''
                  }`}
                  onClick={() => setService('WALK_IN')}
                >
                  <RadioField
                    id="order-serviceMethod-1"
                    name="serviceMethod"
                    defaultValue="WALK_IN"
                    checked={service.includes('WALK_IN')}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    onChange={(e) => setService(e.target.value)}
                  />

                  <div>Walk In</div>
                </button>

                <button
                  type="button"
                  className={`rw-check-radio-items cursor-pointer pr-3 mt-2 ${
                    service == 'CARRYOUT' ? 'checked' : ''
                  }`}
                  onClick={() => setService('CARRYOUT')}
                >
                  <RadioField
                    id="order-serviceMethod-2"
                    name="serviceMethod"
                    defaultValue="CARRYOUT"
                    checked={service.includes('CARRYOUT')}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    onChange={(e) => setService(e.target.value)}
                  />

                  <div>Carryout</div>
                </button>

                <FieldError name="serviceMethod" className="rw-field-error" />
              </div>
              <div style={{ height: '255px' }}>
                <Label
                  name="paymentMethod"
                  className="rw-label mt-0"
                  errorClassName="rw-label rw-label-error"
                >
                  Payment method
                </Label>

                <button
                  type="button"
                  className={`rw-check-radio-items pr-3 mt-2 ${
                    payment == 'CREDIT_ONLINE' ? 'checked' : ''
                  }`}
                  onClick={() => setPayment('CREDIT_ONLINE')}
                >
                  <RadioField
                    id="order-paymentMethod-0"
                    name="paymentMethod"
                    defaultValue="CREDIT_ONLINE"
                    checked={payment.includes('CREDIT_ONLINE')}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    onChange={(e) => setPayment(e.target.value)}
                  />

                  <div>Credit Online</div>
                </button>

                {!service.includes('CARRYOUT') && (
                  <button
                    type="button"
                    className={`rw-check-radio-items pr-3 mt-2 ${
                      payment == 'CREDIT_TERMINAL' ? 'checked' : ''
                    }`}
                    onClick={() => setPayment('CREDIT_TERMINAL')}
                  >
                    <RadioField
                      id="order-paymentMethod-1"
                      name="paymentMethod"
                      defaultValue="CREDIT_TERMINAL"
                      checked={payment.includes('CREDIT_TERMINAL')}
                      className="rw-input"
                      errorClassName="rw-input rw-input-error"
                      onChange={(e) => setPayment(e.target.value)}
                    />
                    <div>Credit Terminal</div>
                  </button>
                )}
                {service != 'CARRYOUT' && (
                  <button
                    type="button"
                    className={`rw-check-radio-items pr-3 mt-2 ${
                      payment == 'CASH' ? 'checked' : ''
                    }`}
                    onClick={() => setPayment('CASH')}
                  >
                    <RadioField
                      id="order-paymentMethod-2"
                      name="paymentMethod"
                      defaultValue="CASH"
                      checked={payment.includes('CASH')}
                      className="rw-input"
                      errorClassName="rw-input rw-input-error"
                      onChange={(e) => setPayment(e.target.value)}
                    />

                    <div>Cash</div>
                  </button>
                )}
                {service != 'DELIVERY' && (
                  <button
                    type="button"
                    className={`rw-check-radio-items pr-3 mt-2 ${
                      payment == 'OPEN' ? 'checked' : ''
                    }`}
                    onClick={() => setPayment('OPEN')}
                  >
                    <RadioField
                      id="order-paymentMethod-3"
                      name="paymentMethod"
                      defaultValue="OPEN"
                      checked={payment.includes('OPEN')}
                      className="rw-input"
                      errorClassName="rw-input rw-input-error"
                      onChange={(e) => setPayment(e.target.value)}
                    />

                    <div>Collect Payment Later</div>
                  </button>
                )}

                <FieldError name="paymentMethod" className="rw-field-error" />
              </div>
            </div>
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
            {service == 'DELIVERY' && (
              <>
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
              </>
            )}
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
            <InputField
              name="deliveryFee"
              value={service == 'DELIVERY' ? 3 : 0}
              className="rw-input"
              type="hidden"
              errorClassName="rw-input rw-input-error"
              validation={{ valueAsNumber: true }}
            />
            <Label
              name="tip"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Tip
            </Label>
            <TextField
              name="tip"
              defaultValue={props.order ? props.order.tip : 0}
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
              defaultValue={props.order ? props.order.discountId : 1}
              className="rw-input"
              errorClassName="rw-input rw-input-error"
            />
            <FieldError name="discountId" className="rw-field-error" />
            {items.map((i) => (
              <div key={i.id}>{i.id}</div>
            ))}
            <InputField
              type="hidden"
              name="placedOnPOS"
              value={true}
              validation={{ valueAsBoolean: true, required: true }}
            />
            <InputField
              type="hidden"
              name="total"
              value={total}
              validation={{ valueAsNumber: true, required: true }}
            />
            Total: {total}
            <button
              type="button"
              onClick={() => {
                setPage(2)
              }}
              className="rw-button rw-button-blue"
            >
              Next
            </button>
          </>
        )}
        {page == 2 && (
          <>
            <button
              type="button"
              onClick={() => {
                setPage(1)
              }}
              className="rw-button rw-button-red"
            >
              Back
            </button>
          </>
        )}
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
