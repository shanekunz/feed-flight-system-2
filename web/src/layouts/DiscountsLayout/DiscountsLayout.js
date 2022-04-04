import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const DiscountsLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.discounts()} className="rw-link">
            Discounts
          </Link>
        </h1>
        <Link to={routes.newDiscount()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Discount
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default DiscountsLayout
