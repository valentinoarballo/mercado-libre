"use client";
import React from 'react';
import { useSearch } from '@/context/SearchContext';

const Pagination = () => {
  const { paging, handleNextPage, handlePrevPage } = useSearch();

  return (
    <div className='flex justify-between w-1/4 my-4 py-4'>
      <a
        href="#navbar"
        onClick={handlePrevPage}
        disabled={paging.offset === 0}
        className={`p-2 border rounded ${paging.offset === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Previous
      </a>
      <a
        href="#navbar"
        onClick={handleNextPage}
        disabled={paging.offset + paging.limit >= paging.total}
        className={`p-2 border rounded ${paging.offset + paging.limit >= paging.total ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Next
      </a>
    </div>
  );
};

export default Pagination;
