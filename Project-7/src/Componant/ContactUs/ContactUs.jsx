import React from "react";
import "./contactus.css";
function ContactUs() {
  const contactdes =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ratione, adipisci perferendis ad enim doloremque voluptate et corrupti asperiores fugiat fuga facere consectetur natus placeat incidunt similique, animi earum pariatur accusamus numquam! Maxime eaque, similique dicta nihil asperiores est  provident quos magni sit adipisci excepturi velit id distinctio  itaque quaerat voluptatibus laborum quas,";

  return (
    <>
      <div className="contact-heading">
        <h1>Contact Us</h1>
      </div>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="contact-col col">
              <h1>
                Send us a message <i class="fa-regular fa-message"></i>
              </h1>
              <p>{contactdes}</p>
              <ul>
                <li>
                  <i class="fa-regular fa-envelope"></i>example123@gmail.com
                </li>
                <li>
                  <i class="fa-solid fa-phone-volume"></i>+92383-2838299
                </li>
                <li>
                  <i class="fa-solid fa-location-dot"></i>Address: itaque
                  quaerat voluptatibus laborum quas,
                </li>
              </ul>
            </div>
            <div className="contact-col col">
              <form>
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter your name..."
                  required
                />
                <label>Phone Number</label>
                <input
                  type="number"
                  name="number"
                  id=""
                  placeholder="Enter your phone Number..."
                  required
                />
                <label>Write your message here</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Enter your message..."
                  required
                ></textarea>
                <br />
                <button type="submit" className="btnn">
                  Submit Now <i class="fa-solid fa-arrow-right-long"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
