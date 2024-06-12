import { createFileRoute, redirect } from '@tanstack/react-router'

// export const Route = createFileRoute('/_authenticated')({
//   component: () => <div>Hello /_authenticated!</div>
// })
export const Route = createFileRoute('/_authenticated')({
    beforeLoad: async ({ context,location }) => {
      if (!isAuthenticated(context)) {
        throw redirect({
          to: '/login',
          search: {
            // Use the current location to power a redirect after login
            // (Do not use `router.state.resolvedLocation` as it can
            // potentially lag behind the actual current location)
            redirect: location.href,
          },
        })
      }
    },
  })

function isAuthenticated() {
    if(context =="12345"){
        return true;
    }
    else {
        return false;
    }
    // throw new Error('Function not implemented.')
}
