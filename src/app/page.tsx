import Nav from './components/Nav'

export default function Home() {
  return (
    <main className="">
      <Nav/>
      <section className="mt-2 flex justify-between bg-white w-screen h-screen" aria-label="Hero-Container">
          <form className="flex flex-col justify-center items-center border w-[33vw]" action="">
            <label className="text-black " htmlFor="">Username: 
            <input className="w-32 border" type="text" placeholder=" username" /></label>
            <label className="text-black" htmlFor="">Password: 
            <input className="w-32 border"  type="password" placeholder=" password" /></label>
            <button className="text-black border-2 border-[#2CFA1F] w-32 mt-2">Sign In</button>
          </form>
        <img className="" src="https://i.ibb.co/cFW83R6/babuska.jpg" alt="Invest Babuska" />
      </section>
      <section className="bg-lime-800">
        <h2>Why Us?</h2>
        <p>Where else are you gonna safeguard your savings when worse comes toworse, at Cher N Noble banking we always got your best interest at heart, prmoise</p>
      </section>

    </main>
  );
}
