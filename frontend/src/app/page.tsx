import { BadgeCard } from '@/components/Badge/BadgeCard'
import { PrimaryButton } from '@/components/Buttons/Primary'
import { SecondaryButton } from '@/components/Buttons/Secondary'
import { ProductCard } from '@/components/Card/Product'
import { Shoe } from '@/store/ShoeSlice'
import { Rubik, Open_Sans } from 'next/font/google'
import Image from 'next/image'

const rubik = Rubik({ subsets: ['latin'] })
const open_sans = Open_Sans({ subsets: ['latin'] })
export default function Home() {

  const mockShoe: Shoe = {
    id: 1,
    attributes: {
      name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
      price: 125,
      description: '',
      gender: '',
      size: 39,
      badge: 'New',
      type: 'Casual',
      colors: Object,
      quantity: 1,
      image: {
        data: 
        [
          {
            id: 1,
            attributes: {
              name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
              url: '/Rectangle 5.png'
            }
          }
        ]
      }
    }
  }

  return (
    <main className={`${rubik.className} bg-gray `}>
      <section className='text-darkGray'>
        <div>
          <h1 className='font-bold text-6xl'>DO IT <span className='text-blue'>RIGHT</span></h1>
          <div className='relative min-w-[358px] h-[382px] md:h-[750px]'>
            <Image src="/image 14.png" className='' alt=""  fill/>
            <div className='absolute bg-darkGray p-2 rotate-[270deg] top-24 -left-[63px] rounded-b-lg md:p-6 md:top-[160px] md:-left-[83px]'>
              <p className='text-gray font-semibold text-xs md:text-base'>Nike product of the year</p>
            </div>
            <div className='absolute bottom-4 px-4 text-gray font-semibold w-60 md:w-[490px] md:px-12 md:bottom-12'>
              <div className=''>
                <h3 className='text-2xl md:text-7xl'>NIKE AIR MAX</h3>
                <p className={`text-sm md:text-2xl ${open_sans.className}`}>Nike introducing the new air max for everyone's comfort</p>
              </div>
              <PrimaryButton text='SHOP NOW' className="px-4 py-2 mt-2 md:py-4 md:px-8 md:mt-6" />
            </div>
            <div className='absolute bottom-4 right-4 md:bottom-12 md:right-8'>
              <Image className="w-[64px] h-[64px] mb-2 md:w-[160px] md:h-[160px] md:mb-4" src="/Rectangle 2.png" alt="" width={64} height={64} />
              <Image className="w-[64px] h-[64px] md:w-[160px] md:h-[160px]" src="/Rectangle 1.png" alt="" width={64} height={64} />
            </div>
          </div>
        </div>

        <div className='flex justify-between items-center my-6'>
          <p className='font-semibold text-2xl'>Don’t miss out <br/> new drops</p>
          <PrimaryButton text='SHOP NEW DROPS' className="px-4 py-3 h-10" />
        </div>

        <div className='flex flex-wrap gap-4'>
          {[1,2,3,4].map(() => (
            <ProductCard shoe={mockShoe} />
          ))}

        </div>

      </section>
    </main>
  )
}
