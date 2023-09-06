import Image from "next/image";
import MtnForm from "./components/bicosPayment";
// import Events from "./components/events";
// import EventsForm from "./components/eventsForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MtnForm />
    </main>
  );
}
