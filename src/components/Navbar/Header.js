import Dp from '../../assets/Dp.png';
import Image from 'next/image';

function Header() {
  const userName = "Investor"; // Replace this with the user's actual name if available

  return (
    <header className="flex items-center gap-2 p-4 relative -z-[1] rounded-b-lg bg-blue-700 shadow-md">
      <div className="relative w-16 h-16 rounded-full overflow-hidden">
        <Image src={Dp} layout="fill" objectFit="cover" alt="Investor Profile Picture" />
      </div>
      <h2 className="font-semibold text-white">
        Hi {userName}
      </h2>
    </header>
  );
}

export default Header;
