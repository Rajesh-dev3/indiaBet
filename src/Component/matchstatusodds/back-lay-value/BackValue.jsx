import { useSelector } from 'react-redux';

const BackValue = ({top, bottom, bg,fun,isBack,data,item,setCheckFancy,checkFancy,setBookMaker,checkBookMaker}) => {
  const stack = useSelector((state)=>state?.betData?.betData)
  const oddsCheck = checkFancy?bottom: top
  return (
    <div  style={{background:bg}} color='black' onClick={()=>{
      setCheckFancy(checkFancy)
      setBookMaker(checkBookMaker)
      fun(stack?.stack,oddsCheck,isBack, data,item);
    }}><p>{top}</p><p>{bottom}</p></div>
  )
}

export default BackValue