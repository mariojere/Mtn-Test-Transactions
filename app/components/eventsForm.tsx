// import { revalidateTag } from "next/cache";
// import React from "react";
// import { json } from "stream/consumers";
// import { addEvenToDataBase } from "../functonality/createEvent";

// const EventsForm = () => {
//   return (
//     <div className="bg-white rounded-lg px-8 py-10 space-y-6">
//       <div className="text-left">
//         <h1 className="font-bold text-xl text-[#131212]">Add Events</h1>
//         <p className="font-normal text-lg text-[#666666]">
//           Let’s add a new event!
//         </p>
//       </div>
//       <form action={addEvenToDataBase} className="flex flex-col gap-4">
//         {/* Event Name */}
//         <div className="space-y-2 flex flex-col">
//           <label className="text-base font-semibold text-[#313131]" htmlFor="">
//             Event Name
//           </label>
//           <input
//             className="placeholder:text-[#AAAAAA] h-[42px] w-[442px] text-black border-none ring-[0.8px] ring-[#E1E1E1] rounded-lg pl-4"
//             type="text"
//             name="eventName"
//             placeholder="Type the event name"
//           />
//         </div>
//         {/* Event Description   */}
//         <div className="space-y-2 flex flex-col">
//           <label className="text-base font-semibold text-[#313131]" htmlFor="">
//             Event Description
//           </label>
//           <input
//             className="placeholder:text-[#AAAAAA] h-[42px] w-[442px] text-black border-none ring-[0.8px] ring-[#E1E1E1] rounded-lg pl-4"
//             type="text"
//             name="evenDscription"
//             placeholder="Type the event details"
//           />
//         </div>
//         {/* Event Time  */}
//         <div className="space-y-2 flex flex-col">
//           <label className="text-base font-semibold text-[#313131]" htmlFor="">
//             Event Time
//           </label>
//           <input
//             className="placeholder:text-[#AAAAAA] h-[42px]  text-black w-[442px] border-none ring-[0.8px] ring-[#E1E1E1] rounded-lg px-4"
//             type="time"
//             name="eventTime"
//           />
//         </div>
//         {/* Event Date*/}
//         <div className="space-y-2 flex flex-col">
//           <label className="text-base font-semibold text-[#313131]" htmlFor="">
//             Event Date
//           </label>
//           <input
//             className="placeholder:text-[#AAAAAA]  text-black h-[42px] w-[442px] border-none ring-[0.8px] ring-[#E1E1E1] rounded-lg px-4"
//             type="date"
//             name="eventDate"
//           />
//         </div>
//         {/* Wallet RS2 */}
//         <div className="space-y-2 flex flex-col">
//           <label className="text-base font-semibold text-[#313131]" htmlFor="">
//             Wallet RS2
//           </label>
//           <input
//             className="placeholder:text-[#AAAAAA]  text-black h-[42px] w-[442px] border-none ring-[0.8px] ring-[#E1E1E1] rounded-lg pl-4"
//             type="text"
//             name="walletOne"
//             placeholder="Wallet 1"
//           />
//         </div>
//         {/* Wallet RS3 */}
//         <div className="space-y-2 flex flex-col">
//           <label className="text-base font-semibold text-[#313131]" htmlFor="">
//             Wallet RS3
//           </label>
//           <input
//             className="placeholder:text-[#AAAAAA]  text-black h-[42px] w-[442px] border-none ring-[0.8px] ring-[#E1E1E1] rounded-lg pl-4"
//             type="text"
//             name="walletTwo"
//             placeholder="Wallet 2"
//           />
//         </div>
//         {/* Split */}
//         <div className="space-y-2 flex flex-col">
//           <label className="text-base font-semibold text-[#313131]" htmlFor="">
//             Split
//           </label>
//           <input
//             className="placeholder:text-[#AAAAAA]  text-black h-[42px] w-[442px] border-none ring-[0.8px] ring-[#E1E1E1] rounded-lg pl-4"
//             type="percent"
//             name="split"
//             placeholder="0%"
//           />
//         </div>
//         {/* Cost of Ticket */}
//         <div className="space-y-2 flex flex-col">
//           <label className="text-base font-semibold text-[#313131]" htmlFor="">
//             Price
//           </label>
//           <input
//             className="placeholder:text-[#AAAAAA] text-black h-[42px] w-[442px] border-none ring-[0.8px] ring-[#E1E1E1] rounded-lg pl-4"
//             type="number"
//             name="price"
//             placeholder="In Crypto"
//           />
//         </div>
//         <div className="flex flex-row gap-4">
//           <button
//             type="submit"
//             className="bg-[#65B32E] border border-[#65B32E] rounded-[30px] px-6 py-4 text-white text-base font-bold w-fit h-fit"
//           >
//             Add
//           </button>
//           <button className="border border-[#65B32E] rounded-[30px] px-6 py-4 text-[#65B32E] text-base font-bold w-fit h-fit">
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EventsForm;
