"use client"
import ProductDetail from '@/components/ProductDetail'
import React from 'react'

function ProductInfo(context) {
  const { params } = context
  const { id } = params

  return (
    <ProductDetail itemId={id}/>
  )
}

export default ProductInfo