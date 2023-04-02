import React from "react";

function Card({ title, children, color }) {
  return (
    <div class="w-[25%] bg-black flex flex-col justify-center items-center">
      <div class="text-[18px] text-white">{title}</div>
      <div class="w-[70%] text-[15px] text-[#7C7E82]">{children}</div>
      <div></div>
    </div>
  );
}

export default Card;
