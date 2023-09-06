import { revalidateTag } from "next/cache";
import React from "react";

export const SendMtnPay = async (e: MtnData) => {
  "use server";
  const sender = e.get("sender")?.toString();
  const receiver = e.get("receiver")?.toString();
  const amount = e.get("amount")?.toString();

  if (!sender || !receiver || !amount) return;

  const newPay: MtnData = {
    sender,
    receiver,
    amount,
  };

  await fetch("https://64f61e582b07270f705e2c89.mockapi.io/MtnTestForSending", {
    method: "POST",
    body: JSON.stringify(newPay),
    headers: { "Content-Type": "application/json" },
  });
  revalidateTag("eventData");

  if (newPay) {
    !sender || !receiver || !amount;
  }
};
