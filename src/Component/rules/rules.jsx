import  { useState } from 'react'
import "./styles.scss"
import { closeModalRule } from '../../services/sruleModalSlice'
import { useDispatch } from 'react-redux'
import { useGetRulesQuery } from '../../services/rulesApi/rulesApi'
const Rules = ({setRulemodalOpen}) => {
    const [activeTab, setActiveTab] = useState(0)
    const dispatch = useDispatch()
    const {data} = useGetRulesQuery()
    console.log(data)
  return (
    <div className='rule-con'>
        <div className="rule-heading">
            INDIABET Rules & Regulations
            </div> 
            <div className="rule-tabs">
                <ul>
                    <li onClick={()=>setActiveTab(0)}  className={activeTab == 0 ?"active-tab":""}>Hindi</li>
                    <li onClick={()=>setActiveTab(1)} className={activeTab == 1 ?"active-tab":""}>English</li>
                </ul>
            </div>
            <div className="rule-content">

            <ul>
                {data?.data?.msg?.map((item)=>{
                    return(

                        <li>{ activeTab == 0?item?.hindi:item?.english}</li>
                    )

                })}
            </ul>
            <div className="note">
            नोट : { activeTab == 0?data?.data?.note?.hindi:data?.data?.note?.english}
            </div>
            <div className="accept-btn">

            <button onClick={()=>{
                dispatch(closeModalRule());
                setRulemodalOpen(true)}}>Accept</button>
                </div>
            </div>
            </div>
  )
}

export default Rules