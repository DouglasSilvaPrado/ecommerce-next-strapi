'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md'

type Values = {
  label: string,
  path: string
}

type DropdownItem = {
  label: string;
  values: Values[]
};

type DropdownProps = {
  items: DropdownItem;
};

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div className=''>
        <button
          type="button"
          className="flex items-center"
          onClick={toggleDropdown}
        >
          {items?.label}
          <MdOutlineArrowDropDown />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute left-0 z-10 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.values.map((item: Values) => (
              <Link
                href={item.path}
                key={item.label}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
