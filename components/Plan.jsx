import React from 'react'

export default function Plan() {
  return (
    <div>
        <section className='plan-section' id='plan-section'>
        <div className="container">
            <div className="plan-container">
                <div className="plan-container__title">
                    <h3>Plan you trip now</h3>
                    <h2>Quick & Easy car rental</h2>
                </div>
                <div className="plan-container__boxes">
                    <div className="plan-container__boxes__box">
                        <img src="../images/icon1.png" alt="icon_img" />
                        <h3>Select Car</h3>
                        <p>
                            we offer a big range of vechicles for al your driving needs.
                            we have the perfect car to meet your needs
                        </p>
                    </div>
                    <div className="plan-container__boxes__box">
                        <img src="../images/icon2.png" alt="icon_img" />
                        <h3>Contact Operator</h3>
                        <p>
                        Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                        </p>
                    </div>
                    <div className="plan-container__boxes__box">
                        <img src="../images/icon3.png" alt="icon_img" />
                        <h3>Let's Drive</h3>
                        <p>
                        Whether you're hitting the open road, we've got you covered
                  with our wide range of cars
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}
