import React from 'react';

function AboutUs() {
  return (
    <div>
      <div style={{ backgroundColor: '#1890ff', padding: '20px 0' }}>
        <div style={{ color: 'white', textAlign: 'center' }}>
          <h1>About Us Page</h1>
          <p>Some text.</p>
          <p>Resize the browser window to see that this page is responsive by the way!</p>
        </div>
      </div>

      <h2 style={{ textAlign: 'center' }}>Our Team</h2>

      <div className="row" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="column">
          <div className="card">
            <div className="jane"></div>
            <div className="container">
              <h2>Jane Potter</h2>
              <p className="title">Chairman</p>
              <p>Jane potter is a business women which is a confident women.</p>
              <p>potter.jane@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="mike"></div>
            <div className="container">
              <h2>Mike Tyson</h2>
              <p className="title">Developer</p>
              <p>Mike Tyson is a business man which is working in MNC</p>
              <p>tyson.mike@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="john"></div>
            <div className="container">
              <h2>John Cena</h2>
              <p className="title">Manager</p>
              <p>John Cena is a business man which is working as Manager.</p>
              <p>cena.john@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
