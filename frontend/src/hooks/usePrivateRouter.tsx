import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const usePrivateRouter = () => {
  const { status, data } = useSession()
  const { push } = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      push('/Signin')
    }
    if (status === 'authenticated') {
      push('/')
    }
  }, [status])

  return { status, data }
}