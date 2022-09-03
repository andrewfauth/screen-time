import {getUser} from '~/services/users.server'
import { useLoaderData, Link } from '@remix-run/react'

export async function loader({request}) {
  return getUser(request)
}

function Index() {
  const user = useLoaderData()
  
  return (
    <div>
      Dashboard for {user.username}
      <Link to="/logout">
        Logout
      </Link>
    </div>
  )
}

export default Index