import React from 'react'
import ManufacturerList from "../components/ManufacturerList/ManufacturerList";

const ManufacturerContainer = props =>(
        <div>
            <div id="site_manufacturer_container_title">
                <div id="manufacturer_container_title">
                    <div className="row">
                        <div className="col-1">
                            <div id="site_manufacturer_title">
                                <span id="site_uid14">ВЫБЕРИТЕ ПРОИЗВОДИТЕЛЯ</span>
                            </div>
                            <div id="site_manufacturer_container_line_s">
                                <img src={ require('../../public/images/img0002.png') } id="manufacturer_container_line_s" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="site_manufacturer_list">
                <div id="manufacturer_list">
                    <div className="row">
                        <div className="col-1">
                        </div>
                        <div className="col-2">



                            <ManufacturerList
                                activeLink={props.activeLink}
                                manufacturerLists = {props.manufacturerLists}
                                onManufacturerClick={props.onManufacturerClick}

                            />

                        </div>
                        <div className="col-3">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )

export default ManufacturerContainer