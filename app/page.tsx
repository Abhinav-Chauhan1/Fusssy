import Navbar from "./components/Navbar"
import Body from "./components/Body";

export default function Home() {
  return (
    <main className="flex max-h-screen h-screen flex-col bg-black">
      <Navbar />
      <Body />

    </main>
  );
}
