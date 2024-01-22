import { useEffect, useState } from 'react';
import Dp from '../../assets/Dp.png';
import Image from 'next/image';

function Header() {
  const [username,setUsername] = useState("")
   useEffect(()=>{
      const name = JSON.parse(localStorage.getItem("investorDetails"))
      setUsername(name?.fullName)
   },[])

  return (
    <header className="flex items-center gap-2 p-2 relative -z-[1] rounded-b-lg bg-blue-700 shadow-md">
      <div className="relative w-16 h-16 rounded-full overflow-hidden">
        <Image src={Dp} layout="fill" objectFit="cover" alt="Investor Profile Picture" />
      </div>
      <h2 className="font-semibold text-white">
        Hi {username}
      </h2>
    </header>
  );
}

export default Header;
