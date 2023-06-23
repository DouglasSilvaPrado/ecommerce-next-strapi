import { ColorType } from '@/store/ShoeSlice';
import { useState } from 'react';


interface ColorSelectionProps {
  colors?: ColorType[];
}

const ColorSelection: React.FC<ColorSelectionProps> = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState<ColorType | null>(null);

  const handleColorClick = (color: ColorType) => {
    setSelectedColor(color);
  };

  return (
    <div className='flex '>
      {colors?.map((color) => (
        <div
          key={color.id}
          className={`w-6 h-6 rounded-full mr-2 ${selectedColor === color ? 'border-2 border-black' : ''}`}
          style={{ backgroundColor: color.attributes.cor, cursor: 'pointer' }}
          onClick={() => handleColorClick(color)}
        />
      ))}
    </div>
  );
};

export default ColorSelection;
