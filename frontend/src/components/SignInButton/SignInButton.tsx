"use client"

import { FaUser } from 'react-icons/fa'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export const SignInButton = () => {

  const { push } = useRouter()

  const { data: session } = useSession()
  console.log("🚀 ~ file: SignInButton.tsx:9 ~ SignInButton ~ session:", session)

  useEffect(() => {
    if(session) push('/')
  }, [session])
  return (
    <>
      {session ? 
        (
          <>
            <button 
              className="mx-2 flex text-xs items-center"
              onClick={() => signOut()}
            >
              <FaUser className='w-4 h-4 md:6 md:h-6' />  <span className='mx-1'>Logout</span>
            </button>
            <img
              className="w-5 h-5 md:w-7 md:h-7 rounded-full mr-2"
              src={`${session?.user?.image}`}
              alt={`${session?.user?.name}`}
            />
          </>
        ) 
        : 
        (
          <button 
              className="mx-2 flex text-xs items-center"
              onClick={() => signIn("")}
            >
              <FaUser className='w-4 h-4 md:6 md:h-6' /> <span className='mx-1'>Login</span>
          </button>
        )
      }
  </>
  )
}
