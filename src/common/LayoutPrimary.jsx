import Header from '../layout/header'
import SubNavBar from '../layout/header/SubNavBar'
import SideBar from '../layout/sider'
import "./styles.scss"
const LayoutPrimary = () => {
  return (
    <div className='layout-primary' >
        <div className="header">
            <Header/>
            <SubNavBar/>
        </div>
        
        <div className="content">
            <div className="left">
                <SideBar/>
            </div>
            <div className="center"></div>
            <div className="right"></div>
        </div>
    </div>
  )
}

export default LayoutPrimary