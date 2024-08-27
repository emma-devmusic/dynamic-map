'use client'

import { Map, Navbar } from "@/components";
import { Countries } from "@/components/countries/Countries";


export default  function Home() {


  return (
    <div>
      <Navbar />
      <div className="mx-4 sm:mx-12 my-8 md:flex gap-3">
        <Countries />
        <Map />
      </div>
    </div>
  );
}
