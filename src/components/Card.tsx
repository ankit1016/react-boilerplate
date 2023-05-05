import React from 'react';
import "./card.scss"
interface PrimaryImage {
  jpegImages: {
    lImage: string;
    mImage: string;
    sImage: string;
    xsImage: string;
  };
  webpImages: {
    lImage: string;
    mImage: string;
    sImage: string;
    xsImage: string;
  };
}

interface CardData {
  id: number;
  slug: string;
  code: string;
  productId: number;
  name: string;
  description: string;
  blouseAttached: boolean;
  blouseFabric: string;
  sareeFabric: string;
  mrp: number;
  listingPrice: number;
  discount: number;
  isActive: boolean;
  isAvailable: boolean;
  supplierId: number;
  supplierName: string;
  availableQty: number;
  primaryImage: PrimaryImage;
}

interface CardProps {
  data: CardData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { primaryImage,name, description, mrp, listingPrice, discount } = data;
  const { xsImage, sImage, mImage, lImage } = primaryImage.webpImages;

  const getImageUrl = () => {
    const width = window.innerWidth;
    if (width >= 1200) return lImage;
    if (width >= 768) return mImage;
    if (width >= 576) return sImage;
    return xsImage;
  };

  const imageUrl = getImageUrl();

 
  
  

  return (
    <div className="card">
      <img src={imageUrl} alt={description}/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className='description'>{description}</p>
        <div className='price-details-div'>
        <p className="listing-price">{listingPrice}</p>
        <p className="mrp">{mrp}</p>
        <p className="discount">({discount}% OFF)</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
