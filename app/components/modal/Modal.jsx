import React from 'react'
import styles from './modal.module.css'

const Modal = ({closeModal}) => {
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
    }
  };
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
      <div className={styles.crossSign}>
      <button className={styles.closemodalBtn} onClick={()=>closeModal(false)}>X</button>
      </div>
      
        <p className={styles.modaltile}>Contact us</p>
      <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type="text" name='name' placeholder='Enter Your Name' required/>
        <label>Phone Number</label>
        <input type="tel" name='phone' placeholder='Enter your contact no' required/>
        <label>Email Id</label>
        <input type="email" name='email' placeholder='Enter your mail id' required/>
        <label>Write your message here</label>
        <textarea name="message" rows='2' placeholder='Enter your message' required></textarea>
        <div className={styles.subBtn}>
        <button type='submit'className={styles.darkBtn} onClick={() => closeModal(false)}>Submit Now</button>
        </div>
      </form>
      <span>{result}</span>
      </div>
    </div>
  )
}

export default Modal
