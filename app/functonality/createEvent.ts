// import { revalidateTag } from "next/cache";
// import React from "react";

// export const addEvenToDataBase = async (e: FormData) => {
//   "use server";
//   const eventName = e.get("eventName")?.toString();
//   const evenDscription = e.get("evenDscription")?.toString();
//   const eventTime = e.get("eventTime")?.toString();
//   const eventDate = e.get("eventDate")?.toString();
//   const walletOne = e.get("walletOne")?.toString();
//   const walletTwo = e.get("walletTwo")?.toString();
//   const split = e.get("split")?.toString();
//   const price = e.get("price")?.toString();

//   if (
//     !eventName ||
//     !eventTime ||
//     !evenDscription ||
//     !eventDate ||
//     !eventDate ||
//     !walletOne ||
//     !walletTwo ||
//     !split ||
//     !price
//   )
//     return;

//   const newEvent: EventsData = {
//     eventName,
//     evenDscription,
//     eventTime,
//     eventDate,
//     walletOne,
//     walletTwo,
//     split,
//     price,
//   };

//   await fetch("https://64f61e582b07270f705e2c89.mockapi.io/eventData", {
//     method: "POST",
//     body: JSON.stringify(newEvent),
//     headers: { "Content-Type": "application/json" },
//   });
//   revalidateTag("eventData");

//   if (newEvent) {
//     !eventName ||
//       !eventTime ||
//       !evenDscription ||
//       !eventDate ||
//       !eventDate ||
//       !walletOne ||
//       !walletTwo ||
//       !split ||
//       !price;
//   }
// };
