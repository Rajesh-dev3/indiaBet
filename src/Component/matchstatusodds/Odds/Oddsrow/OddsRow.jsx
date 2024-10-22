
import './style.scss'
import BackValue from '../../back-lay-value/BackValue'


const OddsRow = ({profithandler,profitLoss,data,prevOdd,odddata,setSelectionId}) => {

console.log(data, "showdata")

  
  return (
  <>
   <div className="row-container">
    <div className="row-odds bat">
      <p className='game-name'>{data?.selectionName}</p>
      <p className='game-price' style={{color:profitLoss>=0?"green":"red"}} >{profitLoss}</p>

    </div>
    <div className="rowright">
    <div className="col1">
    <div className="row-odds"></div>
    <div className="row-odds"></div>

    </div>
    <div className="col1 col2">

    <div className="row-odds back-value">
 
      <BackValue  top={data?.ex?.availableToBack[0].price} selectionId={data?.selectionId} selectionName={data?.selectionName}
       bottom={data?.ex?.availableToBack[0]?.size} isBack={1} data={odddata}   bg={
                        data?.price > prevOdd?.price
                          ? "odds-up-color"
                          : data?.price < prevOdd?.price
                          ? "odds-down-color"
                          : ""
                      } setSelectionId={setSelectionId} item={data} fun={profithandler} 
                      
                      
                      />
      </div>
     
    <div className="row-odds lay-value">
      <BackValue setSelectionId={setSelectionId}  top={data?.ex?.availableToLay[0].price} bottom={data?.ex?.availableToLay[0]?.size} selectionName={data?.selectionName} bg={
                        data?.price > prevOdd?.price
                          ? "odds-up-color"
                          : data?.price < prevOdd?.price
                          ? "odds-down-color"
                          : ""
                      } fun={profithandler} item={data}  isBack={0} data={odddata} />
                      </div>
                    
                       {/* <div className="overback">suspended
                       </div> */}
    </div>
    <div className="col1">

    <div className="row-odds"></div>
    <div className="row-odds"></div>
    </div>
    </div>
    </div>


  </>
  )
}

export default OddsRow