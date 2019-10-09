import React from 'react'

const DeviceList = props =>(
   <div>
       {props.deviceLists.map((list, index) => {
           return(
       <div className="col-2" style={{cursor: 'pointer'}}  onClick={() => props.onDeviceClick(list.id)} key={index}>
           <div id="site_Image1">
               <img src={ require('../../public/images/phone-y.png') } id="Image1" alt=""/>
           </div>
           <div id="site_Text9" >
               <span id="site_uid4">{list.name}</span>
           </div>
       </div>
           )
           }
       )}
   </div>
)

export default DeviceList
