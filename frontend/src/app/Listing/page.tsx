import { Banner } from '@/components/Banner/Banner';
import { ListProduct } from '@/components/ListProduct/ListProduct';

export default function Page() {
  return (
    <div>
      <div>
        <Banner />
        <div></div>{/* filtros  */}
        <div className='my-6'>
          <h3 className='font-semibold text-xl'>Life Style Shoes</h3>
          <p className='font-semibold text-sm'>122 items</p>
        </div>
        <ListProduct />
      </div>
    </div>
  )
}