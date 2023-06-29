import { useSize } from '../../hooks/useSize';

export const SizeFilter = ( ) => {

  const { sizes, handleSizeSelected, sizeSelected } = useSize()

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
