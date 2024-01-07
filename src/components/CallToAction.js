import React from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';

function CallToAction() {
  const router = useRouter();

  const handleExploreProjects = () => {
    router.push('/projects');
  };

  return (
    <div className="mt-16 flex flex-col gap-6 items-center text-center">
      <h3 className="text-3xl font-semibold text-gray-800">
        Ready to Discover Exciting Projects?
      </h3>
      <p className="text-gray-600 max-w-md mt-2">
  Uncover a world of opportunities and find the perfect project that matches your interests.
</p>

      <Button
        // className="b text-xl text-white font-bold py-2 px-8 rounded-xl  hover:bg-[#FFB500]"
        onClick={handleExploreProjects}
      >
        Explore Projects
      </Button>
    </div>
  );
}

export default CallToAction;
