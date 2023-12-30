import Button from "@/components/Button"
import NavHeader from "@/components/Navbar/NavHeader"

function Suggestion() {
  return (
    <>
        <NavHeader/>
    <div className="w-[95%] mx-auto mt-12">
        <label htmlFor="suggestion" className="text-lg font-semibold">Write a Suggestion</label>
        <textarea name="" id="suggestion" cols="30" rows="10" placeholder="Write to a Suggestion or an issue to us"></textarea>
        <div className="text-center mt-4">
        <Button>Submit</Button>
        </div>
    </div>
    </>
  )
}

export default Suggestion