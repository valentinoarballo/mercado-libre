"use client";
import React, { Fragment } from 'react';
import { useSearch } from '@/context/SearchContext';
import CardProduct from "@/components/CardProduct";
import Pagination from "@/components/Pagination";
import CardLoading from '@/components/CardLoading';

const SearchPage = () => {
  const { articles } = useSearch();

  return (
    <div className='flex flex-col items-center'>
      <div className='animate-fade-down animate-once animate-duration-[2000ms] animate-ease-in-out flex flex-wrap w-full justify-center xl:px-56 lg:px-40 px-20'>
        {articles.length === 0 ? (
          <Fragment>
            {[...Array(50)].map(((_, index) => (
              <CardLoading />
            )))}
          </Fragment>
        ) : (
          <Fragment>
            {articles.map((item, key) => (
              <CardProduct item={item} key={key} />
            ))}
          </Fragment>
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default SearchPage;
