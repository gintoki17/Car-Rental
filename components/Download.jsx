import React from "react";
import Img1 from "../images/appstore.svg";
import Img2 from "../images/googleapp.svg";
export default function Download() {
  return (
    <div>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            <h2>Download our app to get mot out of it</h2>
            <p>
              {" "}
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="download-text__btns">
              <img src={Img1} alt="img" />
              <img src={Img2} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
