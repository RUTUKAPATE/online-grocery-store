import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function ProductItem({product}) {
  return (
    <div className='p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg hover:scale-105 hover:shadow-lg transition-all ease-in-out cursor-pointer'>
        <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+product.images[0].url} width={500} height={200} alt={product.name} className='h-[200px] w-[200px] object-contain'/>
        <h2 className='font-bold text-lg'>{product.name}</h2>
        <div className='flex gap-3'>
            {product.sellingPrice&&<h2 className='font-bold text-lg'>${product.sellingPrice}</h2>}
            <h2 className={`font-bold text-lg ${product.sellingPrice&&'line-through text-gray-500'}`}>${product.mrp}</h2>
        </div>
        <Button variant="outline" className='text-primary hover:text-white hover:bg-primary'>Add to cart</Button>
    </div>
  )
}

export default ProductItem