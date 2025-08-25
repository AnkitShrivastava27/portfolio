import React, { useState } from "react";
import "./certificates.css";
import Oracle from '../certificates/oracle.png';
import pp from '../certificates/pp1.png';
import cc1 from '../certificates/ccnv1.png';
import cc2 from '../certificates/ccnv2.png';
import lin from '../certificates/linux.png';
import ibm from '../certificates/ibm.png';

const certificatesData = [
  { title: "Database Programming with SQL - Oracle Academy", img: Oracle },
  { title: "Programming with Python - Coursera", img: pp },
  { title: "CCNAv7: Introduction to Networks - Cisco", img: cc1 },
  { title: "CCNAv7: Switching, Routing & Wireless Essentials - Cisco", img: cc2 },
  { title: "NDG: Linux Essentials - Cisco", img: lin },
  { title: "Getting Started With Enterprise Data Science - IBM", img: ibm },
];

const Certificates = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="certificates">
      <h1 className="section-title">Certificates</h1>
      
      <div className="certificate-grid">
        {certificatesData.map((cert, idx) => (
          <div key={idx} className="certificate-card" onClick={() => setSelectedImg(cert.img)}>
            <img src={cert.img} alt={cert.title} className="certificate-thumb"/>
            <h5>{cert.title}</h5>
          </div>
        ))}
      </div>

      {/* Modal for full certificate view */}
      {selectedImg && (
        <div className="modal" onClick={() => setSelectedImg(null)}>
          <span className="close">&times;</span>
          <img src={selectedImg} alt="Certificate" className="modal-img"/>
        </div>
      )}
    </div>
  );
};

export default Certificates;
