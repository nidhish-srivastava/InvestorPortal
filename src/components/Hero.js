import React from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';
import { Raleway } from 'next/font/google';
const raleway = Raleway({ subsets: ['latin'] })

const featuresSection = [
  {
    label : "Project Listing",
    description : "Browse through a wide range of investment projects"
  },
  {
    label : "Investment Opportunities",
    description : "Discover lucrative investment opportunities"
  },
  {
    label : "Real-Time Updates",
    description : "Stay updated with real-time project progress and news"
  }
]

function Hero() {
  const router = useRouter();

  const handleExploreProjects = () => {
    router.push('/projects');
  };

  return (
    <main>

    <div className={`mt-16 flex flex-col gap-6 items-center text-center ${raleway.className}`}>
      <h3 className="text-3xl font-semibold text-gray-800">
        Ready to Discover Exciting Projects?
      </h3>
      <p className="text-gray-600 max-w-md mt-2">
  Uncover a world of opportunities and find the perfect project that matches your interests.
</p>
      <Button
        className="rounded-sm"
        onClick={handleExploreProjects}
        >
        Explore Projects
      </Button>
    </div>
    <div className={`${raleway.className} pt-2 flex-col pb-6 mb-12 flex items-center bg-blue-600 text-white mt-24`}>
      <div className='flex flex-col gap-4 items-center px-2'>
        <h2 className='text-[35px] font-semibold'>Why Choose Our Investor Panel ?</h2>
        <h4 className='text-center text-[14px] w-[80%] '>Unlock a world of investment possibilities with our exclusive features</h4>
      </div>
        <div className='flex flex-col items-center mt-8 justify-center gap-6 w-[95%]'>
        {featuresSection.map((e,i)=>(
          <div className='bg-blue-400 p-4 w-[100%] flex flex-col gap-4'>
            <h2 className='font-semibold text-[18px]'>{e.label}</h2>
            <p className='text-[14px]'>{e.description}</p>
          </div>
        ))}
        </div>
    </div>
        </main>
  );
}

export default Hero;
