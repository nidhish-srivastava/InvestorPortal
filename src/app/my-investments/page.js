import RupeeIcon from "@/components/Icons/RupeeIcon"
import NavHeader from "@/components/Navbar/NavHeader"
import ProjectCard from "@/components/ProjectCard"

function MyInvestments() {
  return (
    <>
    <NavHeader>My Investment</NavHeader>
    <main>
      <ProjectCard/>
    </main>
    <section className="mt-4 w-[95%] mx-auto p-2 rounded-lg bg-blue-600 shadow-md flex justify-between">
      <div className="flex flex-col text-white p-2">
        <span>Total Invested</span>
        <span><RupeeIcon/> 300,000</span>
      </div>
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="88" height="66" viewBox="0 0 88 66" fill="none">
  <path d="M1 47.8285L2.30575 46.2499C3.61151 44.6714 6.22302 41.5142 8.83452 39.3025C11.446 37.0908 14.0575 35.8246 16.669 41.0867C19.2806 46.3489 21.8921 58.1393 24.5036 58.3501C27.1151 58.5608 29.7266 47.1917 32.3381 40.4695C34.9496 33.7472 37.5611 31.6717 40.1726 29.0089C42.7841 26.3461 45.3956 23.096 48.0071 20.4419C50.6187 17.7877 53.2302 15.7295 55.8417 21.5507C58.4532 27.3719 61.0647 41.0725 63.6762 41.2073C66.2877 41.342 68.8992 27.911 71.5107 27.0822C74.1222 26.2533 76.7337 38.0266 79.3453 35.7799C81.9568 33.5333 84.5683 17.2666 85.874 9.13332L87.1798 1" stroke="white"/>
  <path d="M2.30575 46.536L1 48.1246V66H87.1798V1L85.874 9.18474C84.5683 17.3695 81.9567 33.7389 79.3452 35.9998C76.7337 38.2607 74.1222 26.4129 71.5107 27.247C68.8992 28.0811 66.2877 41.5971 63.6762 41.4614C61.0647 41.3258 58.4532 27.5386 55.8417 21.6806C53.2302 15.8226 50.6187 17.8938 48.0071 20.5648C45.3956 23.2357 42.7841 26.5064 40.1726 29.186C37.5611 31.8656 34.9496 33.9542 32.3381 40.719C29.7266 47.4837 27.1151 58.9246 24.5036 58.7126C21.8921 58.5006 19.2806 46.6356 16.669 41.3402C14.0575 36.0448 11.446 37.319 8.83452 39.5446C6.22302 41.7703 3.61151 44.9474 2.30575 46.536Z" fill="url(#paint0_linear_12_97)" fill-opacity="0.6"/>
  <defs>
    <linearGradient id="paint0_linear_12_97" x1="44.0899" y1="3.19101" x2="44.0899" y2="55.4101" gradientUnits="userSpaceOnUse">
      <stop stop-color="#82F4FF"/>
      <stop offset="0.443865" stop-color="#ACF8FF" stop-opacity="0.665512"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>
      </span>
    </section>
    </>
  )
}

export default MyInvestments