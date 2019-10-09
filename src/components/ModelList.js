import React from 'react'

const ModelList = props =>(
    <>
        {props.modelLists.map((list, index) => {
                return(
        <div className="col-1" key={index} style={{cursor: 'pointer'}}>
            <div id="site_CssMenu2">
                <ul>

                    <li className="firstmain"><a href="/" target="_self" onClick={event => props.onModelClick(list.id, event)}>{list.name}</a>
                    </li>



                </ul>
            </div>
        </div>
                        )
                        }
                    )}

    </>
)

export default ModelList
