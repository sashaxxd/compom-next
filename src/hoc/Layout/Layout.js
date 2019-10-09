import React, {Component} from 'react';
// import {NavLink} from 'react-router-dom'
import Iframe from 'react-iframe'

//Обычный импорт
import './index.css';
import './style.css';
import './site2.css';

class Layout extends Component{

    state ={


        device: [
            {name: 'Телефон',
                Manufacturer: [
                    {name: 'Apple', },
                    {name: 'Самсунг', },
                    {name: 'Htc', },
                ]
            },
            {name: 'Планшет'},
            {name: 'Ноутбук'},
            {name: 'Компьютер'},
            {name: 'Монитор'},
        ]


    }
    
     render(){
         return(
             <div className="wrapper">
                 <div id="site_header">
                     <div id="header">
                         <div className="row">
                             <div className="col-1">
                                 <div id="site_contact_header">
                                     <div id="contact_header">
                                         <div className="row">
                                             <div className="col-1">
                                                 <div id="site_Text2">
                                                     <span id="site_uid0">Все ремонты выполняются по предварительной записи. Запись осуществляется<br/>с 9 до 21 (без выходных) по телефону <a
                                                         href="tel:+375333105810" className="phone-link">+375 (33) 310-58-10</a></span>
                                                 </div>
                                             </div>
                                             <div className="col-2">
                                                 <div id="site_Text1">
                                                     <span id="site_uid1"><a href="tel:+375333105810"
                                                                           className="phone-link">+375 (33) 310-58-10</a><br/> compom.by@gmail.com</span>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div id="site_podmen">
                     <div id="podmen">
                         <div className="row">
                             <div className="col-1">
                             </div>
                             <div className="col-2">
                             </div>
                         </div>
                     </div>
                 </div>
                 <div id="site_line_rem1">
                     <div id="line_rem1">
                         <div className="row">
                             <div className="col-1">
                             </div>
                         </div>
                     </div>
                 </div>
                 <div id="site_hit">
                     <div id="hit">
                         <div className="row">
                             <div className="col-1">
                                 <div id="site_logo">
                                     <img src={ require('../../../public/images/Logo.png') } id="logo" alt=""/>
                                 </div>
                                 <div id="site_slogan">
                                     <span id="site_uid2">Ремонт цифовой техники</span>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div id="site_line_rem2">
                     <div id="line_rem2">
                         <div className="row">
                             <div className="col-1">
                             </div>
                         </div>
                     </div>
                 </div>

                 <main>
                     {this.props.children}
                 </main>

                 <div id="site_contact_container_title">
                     <div id="contact_container_title">
                         <div className="row">
                             <div className="col-1">
                                 <div id="site_contact_title">
                                     <span id="site_uid28">КОНТАКТЫ</span>
                                 </div>
                                 <div id="site_contact_container_line_s">
                                     <img src={ require('../../../public/images/img0005.png') }  id="contact_container_line_s" alt=""/>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div id="site_map_container">
                     <div id="map_container">
                         <div className="row">
                             <div className="col-1">
                                 <div id="site_contact_modile">
                                     <div id="contact_modile">
                                         <div className="row">
                                             <div className="col-1">
                                                 <div id="site_Text3">
                                                     <span id="site_uid29"> Гродно, Улица Найдуса, 1, ТЦ &quot;АВС&quot;, цокольный этаж, пом. 7<br/>Телефон:<br/> <a
                                                         href="tel:+375333105810"
                                                         className="phone-link">+375(33)310-58-10</a><br/>Email:<br/> compom.by@gmail.com</span>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <div id="site_contact_desktop">
                                     <div id="contact_desktop">
                                         <div className="row">
                                             <div className="col-1">
                                                 <div id="site_Text5">
                                                     <span id="site_uid30"> Гродно, Улица Найдуса, 1, ТЦ &quot;АВС&quot;, цокольный этаж, пом. 7<br/>Телефон:<br/> <a
                                                         href="tel:+375333105810"
                                                         className="phone-link">+375(33)310-58-10</a><br/>Email:<br/> compom.by@gmail.com<br/></span>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>


                                 {/*Карта*/}



                                 <Iframe
                                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75613.19289538273!2d23.7808117271881!3d53.68418883768985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dfd64beac55d1d%3A0xf013fd26569718c0!2z0JPRgNC-0LTQvdC-!5e0!3m2!1sru!2sby!4v1569593931636!5m2!1sru!2sby"
                                     width="100%" height="450" >
                                 </Iframe>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div id="site_footer">
                     <div id="footer">
                         <div className="row">
                             <div className="col-1">
                                 <div id="site_Text30">
                                     <span id="site_uid31">© COMPOM.BY 2018. Все права защищены</span>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>


             </div>



         )
     }
}

export default Layout;