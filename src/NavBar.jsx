import Globe from "./assets/globe.png";

export default function NavBar () {
  return (
    <header>
      <nav className="flex justify-center gap-x-4 py-6 bg-[#F55A5A]">
        <img src={Globe} alt="Globe" />
        <p className="text-white">My Travel Journal</p>
      </nav>
    </header>
  )
}