import React from "react";

const Events = async () => {
  const res = await fetch(
    "https://64f61e582b07270f705e2c89.mockapi.io/eventData",
    {
      cache: "no-cache",
      next: {
        tags: ["eventData"],
      },
    }
  );

  const event: EventsData[] = await res.json();

  return (
    <div>
      {event.map((product) => (
        <div
          key={product.id}
          className=" mt-[100px] bg-white shadow-md text-left px-6 py-5 w-[350px] h-[120px] text-[#666666] rounded-md "
        >
          <div className="grid grid-cols-2 gap-[71px]">
            <p className="text-black">{product.eventName}</p>
            <p className="text-[#6FAC43]">{product.price}</p>
          </div>
          <div>{product.eventDate}</div>
          <div>{product.eventTime}</div>
        </div>
      ))}
    </div>
  );
};

export default Events;
