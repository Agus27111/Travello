import React from "react";
import Image from 'next/image'

function Rating() {
  return (
    <div className="flex gap-1 align-center">
        {Array.from({length:4}).map((_,index) => {
          return <Image src="/public/assets/icons/yellow-star.svg" alt="star" width={20} height={20} key={index} />
        })}
    </div>
  )
}

export default Rating;
