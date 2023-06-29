import { SizeType } from '@/@types/SizeType';
import { fetchSizes } from '@/services/sizeService';
import { useAppStore } from '@/store/store';
import { useEffect, useState } from 'react'

interface UseSizeProps {
  sizeSelected: SizeType | null
  setSizeSelected: (size: SizeType | null) => void
}

export const useSize = ({ sizeSelected, setSizeSelected }: UseSizeProps) => {
  const { removeFilter } = useAppStore();
  const [sizes, setSizes] = useState<SizeType[]>([]);

  const handleSizes = async () => {
    const sizeData = await fetchSizes();
    setSizes(sizeData);
  };

  const handleSizeSelected = (size: SizeType) => {
    if (size.attributes.size === sizeSelected?.attributes.size) {
      setSizeSelected(null);
      removeFilter({
        category: 'sizes',
        subCategory: 'size',
        name: sizeSelected.attributes.size.toString(),
      });
      return;
    }
    setSizeSelected(size);
  };

  useEffect(() => {
    handleSizes();
  }, []);

  return { sizes, handleSizeSelected }
}
