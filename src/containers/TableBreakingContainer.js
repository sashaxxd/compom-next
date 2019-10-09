import React from 'react'
import TableBreakingList from "../components/TableBreakingList";


const TableBreakingContainer = props =>(
    <>
        <div id="site_breaking_table">
            <div id="breaking_table">
                <div className="row">
                    <div className="col-1">
                    </div>
                    <div className="col-2">
                        <div id="site_breakingl_table_header">
                            <div id="breakingl_table_header">
                                <div className="row">
                                    <div className="col-1">
                                        <div id="site_Text19">
                                            <span id="site_uid18">{props.modelName} / {props.breacingname}</span>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <TableBreakingList

                            tableBreakingLists={props.tableBreakingLists}
                        />


                    </div>
                    <div className="col-3">
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default TableBreakingContainer