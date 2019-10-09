import React from 'react'


const TableBreakingList = props =>(
    <>
        {props.tableBreakingLists.map((list, index) => {
            return(
        <div id="site_breakingl_table_body" key={index}>
            <div id="breakingl_table_body">
                <div className="row">
                    <div className="col-1">
                        <div id="site_Text20">
                            <span id="site_uid19">{list.name}</span>
                        </div>
                    </div>
                    <div className="col-2">
                        {/*<hr id="Line1"/>*/}
                        <div id="site_Text21">
                            <span id="site_uid20">{list.price}</span>
                        </div>
                    </div>
                    <div className="col-3">
                        {/*<hr id="Line2"/>*/}
                        <div id="site_Text22">
                            <span id="site_uid21">{list.workingHours}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
            }
        )}
    </>
)

export default TableBreakingList