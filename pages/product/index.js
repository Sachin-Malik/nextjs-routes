import React from 'react';
import Link from 'next/link'

function index({productId=100}) {
  return (
    <div>
        <h1><Link href="/product/1"><a>Product 1</a></Link></h1>
        <h1><Link href="/product/2"><a>Product 2</a></Link></h1>

        <Link href={`/product/${productId}`}>
         <a>Product {productId}</a>
        </Link>
        
    </div>
  )
}

export default index