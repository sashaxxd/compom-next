import React from 'react'
import classes from './manufacturer.module.css';

const ManufacturerList = props =>(
    <>
        {props.manufacturerLists.map((list, index) => {


                return(
                    <div id="site_manufacturer_single" key={index} onClick={() => props.onManufacturerClick(list.id)}>
                        <div id="manufacturer_single">
                            <div className="row">
                                <div className="col-1">
                                    {/*<div id="site_Image6">*/}
                                    {/*<img src={ require('../images/Apple-03.png') } id="Image6" alt=""/>*/}
                                    {/*</div>*/}
                                    <div className={
                                        classes.ManufacturerListStyle +
                                            //Условие если id ccылки равен id листа добавляем класс
                                       (list.id === props.activeLink ? ' ' + classes.active : "")
                                    }>
                                        {list.name} {list.id === props.activeLink && "!!!"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        )}
    </>
)

export default ManufacturerList
