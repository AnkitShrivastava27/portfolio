import React from "react";
import './certificates.css';
import Oracle from '../certificates/oracle.png';
import pp from '../certificates/pp1.png';
import cc1 from '../certificates/ccnv1.png';
import cc2 from '../certificates/ccnv2.png';
import lin from '../certificates/linux.png';
import ibm from '../certificates/ibm.png';

const Certificates = () => {
    return (
        <div className="certificates">
            <h1>Certificates</h1>
            <div className="certificate">
                <h5 className="text oracle">Database Programming with SQL - Oracle Academy</h5>
                <img src={Oracle} className="img oracle1" alt="Oracle Certificate"/>
            </div>
            <div className="certificate">
                <h5 className="text pp">Programming with Python - Coursera</h5>
                <img src={pp} className="img pp1" alt="Python Certificate"/>
            </div>
            <div className="certificate">
                <h5 className="text cc1">CCNAv7: Introduction to Networks - Cisco Networking Academy</h5>
                <img src={cc1} className="img cc11" alt="CCNA1 Certificate"/>
            </div>
            <div className="certificate">
                <h5 className="text cc2">CCNAv7: Switching, Routing and Wireless Essentials - Cisco Networking Academy</h5>
                <img src={cc2} className="img cc21" alt="CCNA2 Certificate"/>
            </div>
            <div className="certificate">
                <h5 className="text lin">NDG: Linux Essentials - Cisco Networking Academy</h5>
                <img src={lin} className="img lin1" alt="Linux Certificate"/>
            </div>
            <div className="certificate">
                <h5 className="text ibm">Getting Started With Enterprise Data Science - IBM</h5>
                <img src={ibm} className="img ibm1" alt="IBM Certificate"/>
            </div>
        </div>
    );
};

export default Certificates;
