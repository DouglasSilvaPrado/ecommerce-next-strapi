import { ColorType } from '@/store/ShoeSlice';

interface ColorSelectionProps {
  colors?: ColorType[];
  selectedColor: ColorType | null;
  handleColor: (color: ColorType) => void
}

const ColorSelection: React.FC<ColorSelectionProps> = ({ colors, selectedColor, handleColor }) => {

  return (
    <div className='flex '>
      {colors?.map((color) => (
        <div
          key={color.id}
          className={`w-6 h-6 rounded-full mr-2 ${selectedColor === color ? 'border-2 border-black' : ''}`}
          style={{ backgroundColor: color.attributes.cor, cursor: 'pointer' }}
          onClick={() => handleColor(color)}
        />
      ))}
    </div>
  );
};

export default ColorSelection;
