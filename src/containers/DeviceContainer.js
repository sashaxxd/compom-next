import React, {Component} from 'react'
import DeviceList from "../components/DeviceList"
import ManufacturerContainer from "./ManufacturerContainer"
import {Element ,scroller} from 'react-scroll'
import ModelContainer from "./ModelContainer";
import BreakingContainer from "./BreakingContainer";
import TableBreakingContainer from "./TableBreakingContainer";
import SideNavbar from "../components/SideNavbar";



export default class DeviceContainer  extends Component {

    state ={

        starts: true,
        deviceId: 0,
        manufacturerId: 0,
        modelId: 0,
        breakingId: 0,
        activeLink: null,

        device: [
            {
                id: 1,
                name: 'Телефон',
                Manufacturer: [
                    { id: 1, name: 'Apple',
                        model: [
                            { id: 1, name: 'iPhone 4',
                                braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей',  subtypeBraking: [
                                            { id: 1, name: 'iPhone 4 Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'iPhone 4 Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'iPhone 4 Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                    { id: 2, name: 'iPhone 4 Разбита камера',  subtypeBraking: [
                                            { id: 1, name: 'iPhone 4 Разбита камера', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'iPhone 4 Разбита камера 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'iPhone 4 Разбита камера 3', price: '53 руб.', workingHours: '11 часов'},
                                        ]  },
                                    { id: 3, name: 'iPhone 4 Просто глючит' ,  subtypeBraking: [
                                            { id: 1, name: 'Просто глючит', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Просто глючит АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Просто глючит 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                ]
                            },
                            { id: 2, name: 'iPhone 5',
                                braking: [
                                    { id: 1, name: 'iPhone 5 Разбит дисплей',  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ]  },
                                    { id: 2, name: 'iPhone 5 Разбита камера' ,  subtypeBraking: [
                                            { id: 1, name: 'Разбита камера', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Разбита камера 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Разбита камера3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                    { id: 3, name: 'iPhone 5 Просто глючит' ,  subtypeBraking: [
                                            { id: 1, name: 'Просто глючит АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Просто глючитАКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Просто глючит АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                ] },
                            { id: 3, name: 'iPhone 6',
                                braking: [
                                    { id: 1, name: 'iPhone 6 Разбит дисплей',  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ]  },
                                    { id: 2, name: 'iPhone 6 Разбита камера' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                    { id: 3, name: 'iPhone 6 Просто глючит' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                ] },

                        ]
                    },
                    { id: 2, name: 'Самсунг',
                        model: [
                            { id: 1, name: 'Galaxy S3',  braking: [
                                    { id: 1, name: 'Galaxy S3Разбит дисплей' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                    { id: 2, name: 'Galaxy S3 Разбита камера',  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ]  },
                                    { id: 3, name: 'Galaxy S3 Просто глючит' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                ]},
                            { id: 2, name: 'Galaxy S31',  braking: [
                                    { id: 1, name: 'Galaxy S34 Разбит дисплей' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                    { id: 2, name: 'Galaxy S3 4 Разбита камера' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                    { id: 3, name: 'Galaxy S3 4 Просто глючит' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                ]},
                            { id: 3, name: 'Galaxy S32',  braking: [
                                    { id: 1, name: 'Galaxy S3 4 Разбит дисплей',  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ]  },
                                    { id: 2, name: 'Galaxy S3 4 Разбита камера',  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ]  },
                                    { id: 3, name: 'iPhone 4 Просто глючит',  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ]  },
                                ]},
                            { id: 4, name: 'Galaxy S34',  braking: [
                                    { id: 1, name: 'Galaxy S3 4 Разбит дисплей',  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ]  },
                                    { id: 2, name: 'iPhone 4 Разбита камера',  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ]  },
                                    { id: 3, name: 'iPhone 4 Просто глючит' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                ]},
                            { id: 5, name: 'Galaxy S35',  braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей',  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ]  },
                                    { id: 2, name: 'iPhone 4 Разбита камера' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                    { id: 3, name: 'iPhone 4 Просто глючит',  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ]  },
                                ]},
                            { id: 6, name: 'Galaxy S36',  braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей',  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ]  },
                                    { id: 2, name: 'iPhone 4 Разбита камера' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                    { id: 3, name: 'iPhone 4 Просто глючит' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                ]},
                        ]},
                    { id: 3, name: 'Htc',    model: [
                            { id: 1, name: 'htc',  braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                    { id: 2, name: 'iPhone 4 Разбита камера' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                    { id: 3, name: 'iPhone 4 Просто глючит' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                ]},
                            { id: 2, name: 'htc2',  braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                    { id: 2, name: 'iPhone 4 Разбита камера' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                    { id: 3, name: 'iPhone 4 Просто глючит' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                ]},
                            { id: 3, name: 'htc3',  braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                    { id: 2, name: 'iPhone 4 Разбита камера' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                    { id: 3, name: 'iPhone 4 Просто глючит' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                ]},
                            { id: 4, name: 'htc4',  braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                    { id: 2, name: 'iPhone 4 Разбита камера' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                    { id: 3, name: 'iPhone 4 Просто глючит',  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ]  },
                                ]},

                        ]},
                ]
                },
            {
                id: 2,
                name: 'Планшет',
                Manufacturer: [
                    { id: 1, name: 'Alacatel2',   model: [
                            { id: 1, name: 'iPhone 1 Планшет', braking: [
                                    { id: 1, name: 'Планшет1 Разбит дисплей' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                    { id: 2, name: 'Планшет 4 Разбита камера',  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ]  },
                                    { id: 3, name: 'iPhone 4 Просто глючит' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                ]},
                            { id: 2, name: 'iPhone 1 Планшет', braking: [
                                    { id: 1, name: 'Планшет 2 Разбит дисплей',  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ]  },
                                    { id: 2, name: 'Планшет4 Разбита камера',  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ]  },
                                    { id: 3, name: 'Планшет 4 Просто глючит' ,  subtypeBraking: [
                                            { id: 1, name: 'Замена АКБ', price: '4 руб.', workingHours: '12 часов'},
                                            { id: 1, name: 'Замена АКБ 2', price: '23 руб.', workingHours: '23 часов'},
                                            { id: 1, name: 'Замена АКБ 3', price: '53 руб.', workingHours: '11 часов'},
                                        ] },
                                ] },
                            { id: 3, name: 'iPhone 1 Планшет', braking: [
                                    { id: 1, name: 'Планшет 3 Разбит дисплей' },
                                    { id: 2, name: 'Планшет 4 Разбита камера' },
                                    { id: 3, name: 'Планшет4 Просто глючит' },
                                ] },

                        ]},
                    { id: 2, name: 'Fly Cat2',   model: [
                            { id: 1, name: 'iPhone 2 Планшет', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ]},
                            { id: 2, name: 'iPhone 2 Планшет', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ] },
                            { id: 3, name: 'iPhone 2', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ]},

                        ]},
                    { id:3, name: 'Lenovo2',   model: [
                            { id: 1, name: 'iPhone 3 Планшет', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ]},
                            { id: 2, name: 'iPhone 3', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ] },
                            { id: 3, name: 'iPhone 3', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ] },

                        ]},
                ],

            },
            {
                id: 3,
                name: 'Ноутбук',
                Manufacturer: [
                    { id: 1, name: 'Apple3',   model: [
                            { id: 1, name: 'iPhone 4 Ноутбук', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ]},
                            { id: 2, name: 'iPhone 5', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ] },
                            { id: 3, name: 'iPhone 6 Ноутбук', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ] },

                        ]},
                    { id: 2, name: 'Сам3сунг3',   model: [
                            { id: 1, name: 'iPhone 4 Ноутбук', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ]},
                            { id: 2, name: 'iPhone 5', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ] },
                            { id: 3, name: 'iPhone 6', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ] },

                        ]},
                    { id: 3, name: 'Htc',  model: [
                            { id: 1, name: 'iPhone 4', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ]},
                            { id: 2, name: 'iPhone 5 Ноутбук', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ] },
                            { id: 3, name: 'iPhone 6', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ] },

                        ] },
                ],
            },
            {
                id: 4,
                name: 'Компьютер',
                Manufacturer: [
                    { id: 1, name: 'Apple4',   model: [
                            { id: 1, name: 'iPhone 4 Компьютер', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ]},
                            { id: 2, name: 'iPhone 5', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ] },
                            { id: 3, name: 'iPhone 6', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ] },

                        ]},
                    { id: 2, name: 'Самсунг4',  model: [
                            { id: 1, name: 'iPhone 4 Компьютер', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ]},
                            { id: 2, name: 'iPhone 5', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ] },
                            { id: 3, name: 'iPhone 6', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ] },

                        ] },
                    { id: 3, name: 'Htc4',   model: [
                            { id: 1, name: 'iPhone 4', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ]},
                            { id: 2, name: 'iPhone 5 Компьютер', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ] },
                            { id: 3, name: 'iPhone 6', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ] },

                        ]},
                ]},
            {
                id: 5,
                name: 'Монитор',
                Manufacturer: [
                    {id: 1, name: 'Apple5',   model: [
                            { id: 1, name: 'iPhone 4 Монитор', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ]},
                            { id: 2, name: 'iPhone 5', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ] },
                            { id: 3, name: 'iPhone 6', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ] },

                        ]},
                    {id: 2,name: 'Самсунг5',  model: [
                            { id: 1, name: 'iPhone 4', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ]},
                            { id: 2, name: 'iPhone 5 Монитор', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ] },
                            { id: 3, name: 'iPhone 6', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ] },

                        ] },
                    {id: 3, name: 'Htc5',  model: [
                            { id: 1, name: 'iPhone 4', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ]},
                            { id: 2, name: 'iPhone 5 Монитор', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ] },
                            { id: 3, name: 'iPhone 6 Монитор', braking: [
                                    { id: 1, name: 'iPhone 4 Разбит дисплей' },
                                    { id: 2, name: 'iPhone 4 Разбита камера' },
                                    { id: 3, name: 'iPhone 4 Просто глючит' },
                                ] },

                        ] },
                ],
          },
        ]


    }

    //Функия для выдачи производителей девайса
    onDeviceClickHandler = id => {
        console.log('кликнули по девайсу c идентификатором: ' + id)
        const deviceId = id - 1;
        this.setState({
            //Результаты
            starts: false,
            deviceId,
            manufacturerId: 0,
            modelId: 0,
            activeLink: null,
        })
        console.log('Выбран девайс' + deviceId)
        //https://www.npmjs.com/package/react-scroll cкроллинг
        scroller.scrollTo('ManufacturerContainer', {
            duration: 600,
            delay: 0,
            smooth: true,
            offset: -50,

        })


    }

    onManufacturerClickHandler = (manufacturerId) => {
        console.log('кликнули по производителю c идентификатором: ' + manufacturerId)

        const  mId = manufacturerId - 1;
        this.setState({
            activeLink: manufacturerId,
            //Результаты
            starts: false,
            manufacturerId: mId,
        })
        //https://www.npmjs.com/package/react-scroll cкроллинг
        scroller.scrollTo('ModelContainer', {
            duration: 600,
            delay: 0,
            smooth: true,
            offset: -50,

        })

    }

    onModelClickHandler = (modelId, event) => {
        event.preventDefault()
        console.log('кликнули по модели c идентификатором: ' + modelId)

        const  modId = modelId - 1;
        this.setState({
            //Результаты
            starts: false,
            modelId: modId,
        })

        scroller.scrollTo('BreakingContainer', {
            duration: 600,
            delay: 0,
            smooth: true,
            offset: -50,

        })
    }

    onBreakingClickHandler = (breakingId, event) => {
        event.preventDefault()
        console.log('кликнули по виду поломки c идентификатором: ' + breakingId)
        const  brId = breakingId -1;
        this.setState({
            //Результаты
            starts: false,
            breakingId: brId,
        })



        scroller.scrollTo('TableBreakingContainer', {
            duration: 600,
            delay: 0,
            smooth: true,
            offset: -50,

        })
    }


    render() {
        return (
        <div>
            <div id="site_device_container_title">
                <div id="device_container_title">
                    <div className="row">
                        <div className="col-1">
                            <div id="site_device_title">
                                <span id="site_uid3">ВЫБЕРИТЕ УСТРОЙСТВО</span>
                            </div>
                            <div id="site_device_container_line_s">
                                <img src={ require('../../public/images/img0001.png') } id="device_container_line_s" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="site_device_list1">
                <div id="device_list1">
                    <div className="row">
                        <div className="col-1">
                        </div>

                        <DeviceList
                            deviceLists = {this.state.device}
                            onDeviceClick={this.onDeviceClickHandler}
                        />

                        <div className="col-7">
                        </div>
                    </div>
                </div>
            </div>


            <Element name="ManufacturerContainer">
                       <ManufacturerContainer
                           activeLink={this.state.activeLink}
                           manufacturerLists = {this.state.device[this.state.deviceId].Manufacturer}
                           onManufacturerClick={this.onManufacturerClickHandler}
                       />
            </Element>

            <Element name="ModelContainer">
                <ModelContainer
                    modelLists = {this.state.device[this.state.deviceId].Manufacturer[this.state.manufacturerId].model}
                    onModelClick={this.onModelClickHandler}
                    manufacturerName={this.state.device[this.state.deviceId].Manufacturer[this.state.manufacturerId].name}
                />
            </Element>


            <Element name="BreakingContainer">
            <BreakingContainer
                breakingLists = {this.state.device[this.state.deviceId].Manufacturer[this.state.manufacturerId]
                    .model[this.state.modelId].braking}
                modelName={this.state.device[this.state.deviceId].Manufacturer[this.state.manufacturerId].model[this.state.modelId].name}
                onBreakingClick={this.onBreakingClickHandler}
            />
            </Element>

            <Element name="TableBreakingContainer">
            <TableBreakingContainer
                breacingname={this.state.device[this.state.deviceId].Manufacturer[this.state.manufacturerId].model[this.state.modelId].braking[this.state.breakingId].name}
                modelName={this.state.device[this.state.deviceId].Manufacturer[this.state.manufacturerId].model[this.state.modelId].name}
                tableBreakingLists = {this.state.device[this.state.deviceId].Manufacturer[this.state.manufacturerId]
                    .model[this.state.modelId].braking[this.state.breakingId].subtypeBraking}
            />
            </Element>


        </div>



        )
    }
}