import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'

export default function NotFound() {
  return (
    <PageIntro
      eyebrow="404"
      title="Page not found."
      description="The page you requested does not exist."
    >
      <Link className="text-link" to="/">Return home</Link>
    </PageIntro>
  )
}
