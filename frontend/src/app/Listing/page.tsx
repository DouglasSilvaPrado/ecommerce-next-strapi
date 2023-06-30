import { Banner } from '@/components/Banner/Banner';
import { Filters } from '@/components/Filters/Filters';
import { ListProduct } from '@/components/ListProduct/ListProduct';


export default function Page() {
  return (
    <div>
      <div>
        <Banner />


        <div className='sm:flex'>

          <div className='sm:flex sm:flex-col sm:w-4/12'>

            <div className='my-6'>
              <Filters />
            </div>

            <div className='my-6 sm:order-first sm:ml-3'>
              <h3 className='font-semibold text-xl'>Life Style Shoes</h3>
              <p className='font-semibold text-sm'>122 items</p>
            </div>

          </div>

          <div className='sm:mt-32 sm:w-8/12'>
            <ListProduct />
          </div>
         
        </div>
        
      </div>
    </div>
  )
}