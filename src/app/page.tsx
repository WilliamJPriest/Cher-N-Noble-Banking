import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <nav className="flex justify-around bg-lime-800 w-screen h-10">
        <h1 className="nuclear-text md:text-3xl pl-2">Cher & Noble Banking <span className="md:text-4xl text-2xl meltdown-text hover:text-rose-900">☢</span></h1>
        <ul className="pt-3 flex gap-2">
          <li><a href="">Banking</a></li>
          <li><a href="">Loans</a></li>
          <li><a href="">Investiments</a></li>
          <li><a href="">Why Us?</a></li>
        </ul>
      </nav>
      <section className="shadow shadow-[#2CFA1F] flex justify-between bg-white w-screen" aria-label="Hero-Container">
          <form className="flex flex-col justify-center align-center mx-auto" action="">
            <label className="text-black " htmlFor="">Username 
            <input className="ml-2" type="text" placeholder="username" /></label>
            <label className="text-black" htmlFor="">Password 
            <input className="ml-2"  type="password" placeholder="password" /></label>
            <button className="text-black border-2 border-[#2CFA1F] w-32">Sign In</button>
          </form>
        <img className="" src="https://i.ibb.co/cFW83R6/babuska.jpg" alt="Invest Babuska" />
      </section>

    </main>
  );
}
