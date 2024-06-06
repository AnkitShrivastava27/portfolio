import React from "react"
import './certificates.css'
import Oracle from '../certificates/oracle.png'
import pp from '../certificates/pp1.png'
import cc1 from '../certificates/ccnv1.png'
import cc2 from '../certificates/ccnv2.png'
import lin from '../certificates/linux.png'
import ibm from '../certificates/ibm.png'
const Certificates=()=>{
    return(<div className="certificates">
        <h1>Certificates</h1>
        <h5 className="oracle , text">Database Programming with SQL - Oracle Academy</h5>
        <img src={Oracle} className="oracle1 , img"/>
        <h5 className="pp , text"> Programming with Python - Coursera</h5>
        <img src={pp} className="pp1 , img"/>
        <h5 className="cc1 , text"> CCNAv7: Introduction to Networks - Cisco Networking Academy</h5>
        <img src={cc1} className="cc11 , img"/>
        <h5 className="cc2 , text"> CCNAv7: switching , Routing and Wireless Essentials - Cisco Networking Academy</h5>
        <img src={cc2} className="cc21 , img"/>
        <h5 className="lin , text"> NDG: Linux Essentials - Cisco Networking Academy</h5>
        <img src={lin} className="lin1 , img"/>
        <h5 className="ibm , text"> Getting Started With Enterprise Data Science - IBM</h5>
        <img src={ibm} className="ibm1 , img"/>

    </div>)
}
export default Certificates;