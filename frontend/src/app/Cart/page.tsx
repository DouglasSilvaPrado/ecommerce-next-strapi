'use client'
import { Rubik } from 'next/font/google'
import { CartCard } from '@/components/CartCard/CartCard';
import { useAppStore } from '@/store/store';

const rubik = Rubik({ subsets: ['latin'] })


export default function Page() {
  const { cart } = useAppStore()
  return (
    <div>

      <div className='mb-6'>
        <h2 className='font-semibold text-2xl mb-2'>Saving to celebrate </h2>
        <p className='font-semibold text-xs'>Enjoy up to 60% off thousands of styles during the End of Year sale - while suppiles last. No code needed.</p>
      </div>

      <div>
        {cart.length > 0 ? 
          <div>
             <div className='bg-faWhite rounded-2xl p-4'>
                <div className='mb-2'>
                  <h2 className={`${rubik.className} mb-2 font-semibold text-xl`}>Your bag</h2>
                  <p className='text-sm'>Items in your bag not reserved- check out now to make them yours.</p>
                </div>
                {cart.map((item) => (
                  <CartCard  key={item.id} product={item}/>
                ))}
              </div>
          </div>
          :
          <div className='bg-faWhite rounded-2xl p-4'>
            <p className='font-bold text-xl'>Your shopping cart is empty</p>
          </div>
        }
       
      </div>
    </div>
  )
}