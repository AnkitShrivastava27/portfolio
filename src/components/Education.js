import React from "react";
import "./education.css";

const Education = () => {
  return (
    <div className="education-section">
      <h2 className="section-title">Education</h2>
      
      <div className="timeline">
        {/* B.Tech */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>B.Tech in Computer Engineering</h3>
            <p className="institute">Marwadi University, Rajkot, Gujarat</p>
            <p className="year">Expected Graduation: July 2026</p>
            <h4>Relevant Coursework</h4>
            <ul>
              <li>Data Structures and Algorithms</li>
              <li>Database Management Systems</li>
              <li>Operating Systems</li>
              <li>Computer Networks</li>
              <li>Web Development</li>
            </ul>
          </div>
        </div>

        {/* Class 12 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Senior Secondary Education (Class 12th)</h3>
            <p className="institute">Madhav Public School, Gorakhpur, Uttar Pradesh</p>
            <p className="year">Graduated: 2021</p>
            <p><strong>Major Subjects:</strong> Physics, Chemistry, Mathematics</p>
            <p><strong>Percentage:</strong> 70.2%</p>
          </div>
        </div>

        {/* Class 10 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Secondary Education (Class 10th)</h3>
            <p className="institute">Gyanda International School, Gopalganj, Bihar</p>
            <p className="year">Graduated: 2019</p>
            <p><strong>Percentage:</strong> 76.6%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
