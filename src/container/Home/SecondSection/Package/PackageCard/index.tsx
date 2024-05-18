import React from "react";
import Image from "next/image";
import Button from "@/src/components/Button";

function PackageCard() {
  return (
    <article className="flex flex-col rounded-xl bg-white shadow-lg overflow-hidden w-[393px] ">
      <figure className="relative w-full h-[268px">
        <Image
          src="/public/assets/home/cliff.png"
          alt="Cliff image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </figure>

      <div className="flex flex-col p-4">
        <div className="flex items-center mb-4">
          <Image
            src="/public/assets/icons/yellow-star.svg"
            alt="yellow star"
            width={20}
            height={20}
          />
          <p className="text-heading-5 text-gray-70 ml-1">
            {" "}
            4.6 (1.242 Review)
          </p>
        </div>
        <p className='text-heading-3 text-gray-100 font-label font-bold'> Colloseum Roma
        </p>
        <p className='text-heading-4 text-gray-70 mb-4'> Italia
        </p>
        <p className='text-heading-3 text-gray-100 font-label font-bold'> Rp. 20.000.000
        </p>
        <p className='text-heading-4 text-gray-70 mb-4'> untuk 1 orang, tiket pesawat, penginapan 5 malam, tour guide, makan siang, makan malam, transportasi travel
        </p>
        <div className="flex flex-between gap-3">
            <Button fullWidth outlined>
                Lihat detail
            </Button>
            <Button fullWidth>
                Pesan
            </Button>
        </div>
      </div>
    </article>
  );
};
export default PackageCard;
