import { AiOutlineArrowRight } from 'react-icons/ai'
import { Inter, Rubik } from 'next/font/google'
import Link from 'next/link'

const rubik = Rubik({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <main>
      <div className='text-darkGray'>
        <h1 className={`${rubik.className} font-semibold text-2xl`}>Login</h1>
        <Link href='/Register' className='font-semibold underline cursor-pointer'>Forgot your password?</Link>
      </div>
      <div className='mt-6'>
        <form className={`${inter.className}`}>
          <input
            className='rounded-lg border border-darkGray text-grayInput w-full px-4 py-3 my-3'
            type='email'
            placeholder='Email'
          />
          <input
            className='rounded-lg border border-darkGray text-grayInput w-full px-4 py-3 my-3'
            type='password'
            placeholder='Password'
          />
          <div className='flex my-3'>
            <input
              className='mr-2 w-6 h-6 accent-darkGray'
              type='checkbox'
            />
            <span className='font-semibold text-sm'>Keep me logged in - applies to all log in options below. More info</span>
          </div>
          <button className={`flex items-center justify-between bg-darkGray rounded-lg text-faWhite font-medium p-4 w-full ${rubik.className}`}>
            EMAIL LOGIN
            <AiOutlineArrowRight />
          </button>
        </form>
      </div>
    </main>
  )
}