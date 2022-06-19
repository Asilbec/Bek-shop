
import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Gift = ({ product: { image, name, slug, price } }) => {
  return (
    <div className='product-card-container-cart'>
      <Link href={`/gift/${slug.current}`}>
        <div className="gift-card">
          <img 
            src={urlFor(image && image[0])}
            className="gift-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Gift