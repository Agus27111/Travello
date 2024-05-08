import React from "react";

type Props = {
  label: string;
  subLabel: string;
};

function InfoItem({ label, subLabel }: Props) {
  return (
    <div className="flex flex-col text-center">
      <p className="text-heading-2 font-bold font-label text-gray-100 mb-2">
        {label}
      </p>
      <p className="text-heading-4 font-bold text-gray-70">{subLabel}</p>
    </div>
  );
}

export default InfoItem;
