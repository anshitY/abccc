import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2 "  >
        <Link to="/" className="[&.active]:font-bold" >
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold" >
          About
        </Link>
        {' '}
        <Link to="/posts" className="[&.active]:font-bold">
          contact us
        </Link>
        <Link to="/payments" className="[&.active]:font-bold">
          Payments
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
