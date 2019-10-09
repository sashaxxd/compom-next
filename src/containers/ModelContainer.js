import React from 'react'
import ModelList from "../components/ModelList";

const ModelContainer = props =>(
    <div>

        <div id="site_model_container_title">
            <div id="model_container_title">
                <div className="row">
                    <div className="col-1">
                        <div id="site_model_title">
                            <span id="site_uid15">ВЫБЕРИТЕ МОДЕЛЬ</span>
                        </div>
                        <div id="site_model_container_line_s">
                            <img src={ require('../../public/images/img0003.png') } id="model_container_line_s" alt=""/>
                        </div>
                        <div id="site_model_name_in_title">
                            <span id="site_uid16">{props.manufacturerName}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="site_model_list">
            <div id="model_list">
                <div className="row">
                    <div className="col-1">
                    </div>
                    <div className="col-2">
                        <div id="site_LayoutGrid16">
                            <div id="LayoutGrid16">
                                <div className="row">


                                    <ModelList
                                        modelLists = {props.modelLists}
                                        onModelClick={props.onModelClick}

                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default ModelContainer