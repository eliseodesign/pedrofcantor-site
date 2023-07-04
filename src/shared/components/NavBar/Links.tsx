import { routesContstants } from '@/shared/constants'
import Link from 'next/link'

function Links() {
  return (
    <>
      {
        Object.entries(routesContstants).map(([_, value], i) => {
          const route = value[0];
          return (
            <li key={route[1]}>
              <Link href={route[0]} aria-label={`Go to ${route[1]} page`}>
                <span
                >
                  {route[1]}
                </span>
              </Link>
            </li>
          );
        })
      }
    </>
  )
}

export default Links