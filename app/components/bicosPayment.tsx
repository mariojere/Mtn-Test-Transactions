import { revalidateTag } from "next/cache";
import React from "react";
import { json } from "stream/consumers";
import { SendMtnPay } from "../functonality/paySomeone";

const MtnForm = () => {
  return (
    <div className="bg-white rounded-lg px-8 py-10 space-y-6">
      <div className="text-left">
        <h1 className="font-bold text-xl text-[#131212]">Send Funds</h1>
        <p className="font-normal text-lg text-[#666666]">
          Let’s add a new information!
        </p>
      </div>
      <form action={SendMtnPay} className="flex flex-col gap-4">
        {/*Sender */}
        <div className="space-y-2 flex flex-col">
          <label className="text-base font-semibold text-[#313131]" htmlFor="">
            Sender Number
          </label>
          <input
            className="placeholder:text-[#AAAAAA] h-[42px] w-[442px] text-black border-none ring-[0.8px] ring-[#E1E1E1] rounded-lg pl-4"
            type="text"
            name="sender"
            placeholder="Type the event name"
          />
        </div>
        {/* Receiver  */}
        <div className="space-y-2 flex flex-col">
          <label className="text-base font-semibold text-[#313131]" htmlFor="">
            Receiver number
          </label>
          <input
            className="placeholder:text-[#AAAAAA] h-[42px] w-[442px] text-black border-none ring-[0.8px] ring-[#E1E1E1] rounded-lg pl-4"
            type="text"
            name="receiver"
            placeholder="Type the event details"
          />
        </div>
        {/* amount  */}
        <div className="space-y-2 flex flex-col">
          <label className="text-base font-semibold text-[#313131]" htmlFor="">
            Amount
          </label>
          <input
            className="placeholder:text-[#AAAAAA] h-[42px] w-[442px] text-black border-none ring-[0.8px] ring-[#E1E1E1] rounded-lg pl-4"
            type="text"
            name="amount"
            placeholder="Type the event details"
          />
        </div>

        <div className="flex flex-row gap-4">
          <button
            type="submit"
            className="bg-[#65B32E] border border-[#65B32E] rounded-[30px] px-6 py-4 text-white text-base font-bold w-fit h-fit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default MtnForm;
