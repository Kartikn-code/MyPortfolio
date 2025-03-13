import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
   <section className='contact container lg-12 md-12 sm-12 xs-12'>
        <h1>Contact</h1>
        

        



  <div class="form-container">
      <form class="form">
        <div class="form-group">
          <label for="email">Your Email</label>
          <input required="" name="email" id="email" type="text"></input>
        </div>
        <div class="form-group">
          <label for="textarea">How Can We Help You?</label>
          <textarea required="" cols="50" rows="10" id="textarea" name="textarea">          </textarea>
        </div>
        <button type="submit" class="form-submit-btn">Submit</button>
      </form>
    </div>
   </section>
  )
}

export default Contact