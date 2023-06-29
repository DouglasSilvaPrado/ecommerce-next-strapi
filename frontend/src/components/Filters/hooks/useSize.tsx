import { SizeType } from '@/@types/SizeType';
import { fetchSizes } from '@/services/sizeService';
import { useAppStore } from '@/store/store';
import { useEffect, useState } from 'react'


export const useSize = () => {
  const { removeFilter, sizeSelected, setSizeSelected } = useAppStore();
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

  return { sizes, handleSizeSelected, sizeSelected }
}
