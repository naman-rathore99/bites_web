import React from 'react'
import HeroBanner from './components/ui/HeroBanner';
import ItemGrid from './components/itemGrid/Itemayout';

const page = () => {
  return (
    <div className="popins ">
      <HeroBanner />
      <ItemGrid />
    </div>
  );
}

export default page