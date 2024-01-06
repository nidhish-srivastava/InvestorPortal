import BottomNavBar from "@/components/Navbar/BottomNavBar"
import Header from "@/components/Navbar/Header"

function TrendingProjects() {
  return (
    <>
    <Header/>
    <BottomNavBar/>
    <div className="py-4">
      <span className="ml-4 rounded-md bg-blue-200 bg-opacity-19 text-blue-800 text-sm font-bold px-4 py-1">Trending Projects</span>
    </div>
    </>
  )
}

export default TrendingProjects