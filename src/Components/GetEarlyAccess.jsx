import React from "react";

function GetEarlyAccess() {
  return (
    <div class="flex flex-col items-center m-10">
      <div class="text-[36px]">Get early access</div>
      <div class="text-[15px] p-5">
        Start your 14-day free trial today and see what Lumi can do for your
        business.
      </div>
      <div class="bg-black p-3 rounded-[40px] min-w-[50%] flex flex-col gap-5 pt-5 md:pt-3 md:pl-3 items-center md:flex-row md:justify-between">
        <input
          type="text"
          id="fname"
          name="fname"
          class="focus:outline-0 bg-black text-white md:pl-5 min-w-[50%]"
          placeholder="Enter your email"
        />
        <button class="rounded-full bg-white p-4 min-w-[100%] md:min-w-[40%]">
          Request early access
        </button>
      </div>
    </div>
  );
}

export default GetEarlyAccess;
