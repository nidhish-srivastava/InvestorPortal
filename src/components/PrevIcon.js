
function PrevIcon(props) {
    const {setValue,number,className} = props
  return (
    // <span onClick={()=>setValue(number)} className={`cursor-pointer text-[1.2rem] absolute top-2 left-2 ${className}`}>
    <span onClick={()=>setValue(number)} className={`cursor-pointer text-[1.2rem] ${className}`}>
    <b>
    {"<-"}
    </b>
    </span>
  )
}

export default PrevIcon