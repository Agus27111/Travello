import React from "react";
import CategorieCard from "./CategorieCard";

function Categories() {
  return (
    <>
      <h3 className="text-heading-3 text-gray-100 font-label font-bold pt-14 mb-8">
        {" "}
        Kategori Tempat{" "}
      </h3>

      <div className="flex justify-between">
        {Array.from({ length: 6 }).map((_, index: number) => (
          <CategorieCard key={index} />
        ))}
      </div>
    </>
  );
}

export default Categories;
