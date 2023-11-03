import { Rubik } from 'next/font/google'
import Link from 'next/link'
import { Form } from './components/Form/Form'
import { GoogleButtonRC } from './components/ProvidersButton/Google/GoogleButton'

const rubik = Rubik({ subsets: ['latin'] })

export default async function Signin() {
  return (
    <main>
      <div className='text-darkGray'>
        <h1 className={`${rubik.className} font-semibold text-2xl`}>Login</h1>
        <Link href='/ResetPassword' className='font-semibold underline cursor-pointer'>Forgot your password?</Link>
      </div>
      <div className='mt-6'>
        <Form />
      </div>
      <div className='mt-6'>
        <GoogleButtonRC />
      </div>
    </main>
  )
}