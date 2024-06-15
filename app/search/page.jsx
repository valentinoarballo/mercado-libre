"use client";
import React from 'react';
import { useSearch } from '@/context/SearchContext';
import CardProduct from "@/components/CardProduct";
import Pagination from "@/components/Pagination";

const SearchPage = () => {
  const { articles } = useSearch();

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-wrap w-full justify-center xl:px-56 lg:px-40 px-20'>
        {articles.map((item, key) => (
          <CardProduct item={item} key={key} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default SearchPage;
