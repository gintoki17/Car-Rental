import React from 'react'
import { IconCar, IconInfoCircleFilled, IconX } from "@tabler/icons-react";
import { IconMapPinFilled } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";

export default function Booking() {
  return (
    <section id='booking-section' className='book-section'>
      <div className="container">
        <div className="book-content">
          <div className="book-content__box">
            <h2>Book a car</h2>
            <p className='error-message'>
              All fields required! <IconX width={20} height={20}/>
            </p>
            <form className='box-form'>
              <div className="box-form__car-type">
                <label >
                  <IconCar className='input-icon'/> &nbsp; Select Your Car Type <b>*</b>
                </label>
                <select >
                  <option> Select your car type</option>
                  <option value="Alto 800">Alto 800</option>
                  <option value="Swift Dzire">Swift Dzire</option>
                  <option value="Innova Crysta">Innova Crysta</option>
                  <option value="Toyota Fortuner">Toyota Fortuner</option>
                  <option value="Land Rover Discovery">Land Rover Discovery</option>
                </select>
              </div>

              <div className="box-form__car-type">
                <label >
                  <IconMapPinFilled className='input-icon'/> &nbsp; Pick-up <b>*</b>
                </label>
                <select >
                  <option> Select pick up location</option>
                  <option value="Kochi">Kochi</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Calicut">Calicut</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Trivandrum">Trivandrum</option>
                </select>
              </div>

              <div className="box-form__car-type">
                <label >
                  <IconMapPinFilled className='input-icon'/> &nbsp; Drop-of <b>*</b>
                </label>
                <select >
                  <option> Select pick up location</option>
                  <option value="Kochi">Kochi</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Calicut">Calicut</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Trivandrum">Trivandrum</option>
                </select>
              </div>
  
              <div className="box-form__car-time">
                <label >
                  <IconCalendarEvent className='input-icon'/> &nbsp; Pick-up <b>*</b>
                </label>
                <input type="date" />
              </div>

              <div className="box-form__car-time">
                <label >
                  <IconCalendarEvent className='input-icon'/> &nbsp; Drop-of <b>*</b>
                </label>
                <input type="date" />
              </div>
            
              <button type='submit'>Search</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
