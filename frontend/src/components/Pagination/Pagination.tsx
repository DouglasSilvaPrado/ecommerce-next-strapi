import { useAppStore } from '@/store/store'
import React, { useEffect, useState } from 'react'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'

export const Pagination = () => {
    const { currentPage, setCurrentPage, pageCount } = useAppStore()
    const [pages, setPages] = useState<number[]>([]);

    const createArrayOfPages = (pageCount: number): number[] => {
        return Array.from({ length: pageCount }, (_, index) => index + 1);
    }

    useEffect(() => {
        const newArray = createArrayOfPages(pageCount);
        setPages(newArray);
    }, [currentPage, pageCount]);

    return (
        <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8 my-4">
            <div className="hidden justify-center sm:flex" aria-label="Pagination">
                <ul className="flex items-center">
                    <li>
                        <button
                            onClick={() => setCurrentPage(1, 'decrease')}
                            className="hover:text-blue hover:bg-gray p-2 border rounded-lg mr-2">
                            <span className="flex items-center gap-x-1">
                                <MdNavigateBefore className='w-5 h-5' />
                                Previous
                            </span>
                        </button>
                    </li>
                    {pages?.map((item, index) => (
                        <li key={index} className="">
                            <button
                            onClick={() => setCurrentPage(item, 'set')}
                                className={`px-3 py-2 border duration-150 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg mx-2
                                ${currentPage === item ? "bg-indigo-50 text-indigo-600 font-medium" : ""}`}>
                                {item}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => setCurrentPage(1, 'increase')}
                            className="hover:text-blue hover:bg-gray p-2 border rounded-lg ml-2">
                            <span className="flex items-center gap-x-1">
                                Next
                                <MdNavigateNext className='w-5 h-5' />
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
            {/* mobile */}
            <div className="flex items-center justify-between text-sm text-gray-600 font-medium sm:hidden">
                <button
                    className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
                    onClick={() => { setCurrentPage(1, 'decrease') }}
                >
                    Previous
                </button>
                <div className="font-medium">
                    Page {currentPage} of {pageCount}
                </div>
                <button
                    className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
                    onClick={() => { setCurrentPage(1, 'increase') }}
                >
                    Next
                </button>
            </div>
        </div>
    )
}
