import React from "react";
import Image from "next/image";
import Rating from "../Rating";

function TestimonialsCard() {
  return (
    <article className="flex flex-col bg-white rounded-xl shadow w-[288px] h-[281px] p-4">
      <div className="flex mb-4">
        <figure className="relative rounded-full overflow-hidden h-16 w-16 mr-3">
          <Image
            src="/public/assets/home/profile.png"
            alt="profile dummy"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </figure>
        <div className="flex flex-col">
          <p className="text-heading-4 font-bold font-label text-gray-100 mb-1">
            {" "}
            Bagas Putra{" "}
          </p>
          <p className="text-heading-5 font-bold text-gray-50">
            {" "}
            Bandung, Jawa barat
          </p>
        </div>
      </div>
      <Rating />
      <p className="text-heading-5  text-gray-70 my-4">
        Nyari makan halal gampang bangget udah da toure guide nya, tour guidenya
        juga enak diajak ngobrol, dan penginapannya pun nyaman.
      </p>
      <p className="text-heading-5 font-bold text-gray-100">
        Nusa Panida, Bali
      </p>
      <p className="text-heading-6  text-gray-50">27-02-2020</p>
    </article>
  );
}

export default TestimonialsCard;
