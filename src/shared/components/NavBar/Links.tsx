import { routesContstants } from '@/shared/constants'
import Link from 'next/link'

function Links() {
  return (
    <>
      {
        Object.entries(routesContstants).map(([_, value], i) => {
          const route = value[0];
          return (

            <Link key={route[1]} href={route[0]} aria-label={`Go to ${route[1]} page`}>
                {route[1]}
            </Link>

          );
        })
      }
    </>
  )
}

export default Links