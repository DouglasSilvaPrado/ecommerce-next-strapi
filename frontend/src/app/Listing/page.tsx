import { Banner } from '@/components/Banner/Banner';
import { Filters } from '@/components/Filters/Filters';
import { InfoProduct } from '@/components/InfoProduct/InfoProduct';
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

            <InfoProduct />

          </div>

          <div className='sm:mt-32 sm:w-8/12'>
            <ListProduct />
          </div>
         
        </div>
        
      </div>
    </div>
  )
}