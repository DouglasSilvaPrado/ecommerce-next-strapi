
import { SizeType } from '@/@types/SizeType';
import { useSize } from '../../hooks/useSize';

interface SizeFilterProps {
  sizeSelected: SizeType | null
  setSizeSelected: (size: SizeType | null) => void
}

export const SizeFilter = ( {sizeSelected, setSizeSelected}: SizeFilterProps) => {

  const { sizes, handleSizeSelected } = useSize({ sizeSelected, setSizeSelected })

  return (
    <div className="m-4">
      <h3 className="font-semibold mb-3">SIZE</h3>
      <div className="flex flex-wrap">
        {sizes?.map((size) => (
          <div
            key={size.id}
            className={`w-12 h-12 rounded-lg ${
              sizeSelected === size ? 'bg-darkGray text-white' : 'bg-white'
            } mr-2 my-2 cursor-pointer flex justify-center items-center`}
            onClick={() => handleSizeSelected(size)}
          >
            <p className="font-medium text-sm">{size.attributes.size}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
