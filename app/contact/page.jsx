'use client'
import React from 'react'
import styles from './contact.module.css'

const Page = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "23fcf792-2466-4091-88e5-b32a756c0f3e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }};
  return (
    <section>
      <div className={styles.contactHeader}>
        <p className={styles.contactSubhead}>Home / Contact</p>
         <h2 className={styles.contactHead}>Contact</h2>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactBox}>
          <h4>About</h4>
          <p>We are one of the leading suppliers and exporters of agricultural products</p>
        </div>
        <div className={styles.contactBox}>
          <h4>Contact</h4>
          <p>+91-11-43596939</p>
          <p>info@agkagro.in</p>
          <p>Mon-Fri: 9.00am to 8.00pm</p>
        </div>
        <div className={styles.contactBox}>
          <h4>Address</h4>
          <p>LGF 92, World Trade Centre</p>
          <p>Avenue Road, Connaught Place</p>
          <p>New-Delhi 110001</p>
        </div>
      </div>
      <div className={styles.addressBox}>
        <div className={styles.responsiveMap}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448243.27024884167!2d76.65929416562498!3d28.632742600000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b03665eb%3A0x65c8601c7ec7c2b5!2sA%20G%20K%20Agro%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1731923402982!5m2!1sen!2sin" width="600" height="545" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className={styles.contactBoxRight}>
        <p>Contact us</p>
        <h4>Write a Message</h4>
        <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type="text" name='name' placeholder='Enter Your Name' required/>
        <label>Phone Number</label>
        <input type="tel" name='phone' placeholder='Enter your contact no' required/>
        <label>Email Id</label>
        <input type="email" name='email' placeholder='Enter your mail id' required/>
        <label>Write your message here</label>
        <textarea name="message" rows='4' placeholder='Enter your message' required></textarea>
        <button type='submit' className={styles.formBtn}>Submit Now</button>
        </form>
        <span>{result}</span>
        </div>
      </div>
    </section>
  )
}

export default Page
