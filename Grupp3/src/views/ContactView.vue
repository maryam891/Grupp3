<script>
  export default {
    data() {
      return {
        contactData: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
    //contact form, emptying field after submit
    methods: {
      submitContactForm(e) {
        alert('Message sent successfully!')
        this.contactData = {
          name: '',
          email: '',
          message: ''
        }
        e.preventDefault()
      }
    }
  }
</script>

<template>
  <main>
    <h1>Contact us</h1>
    <section>
      <div class="contact-container">
        <div class="contact-form">
          <h2>Got any questions or feedback?</h2>
          <p class="p-contact">
            Contact us and we'll get back to you as soon as possible.
          </p>
          <p class="p-obligatory">*Obligatory field</p>
          <!--contactform with required fields-->
          <form @submit="submitContactForm">
            <div class="form-contact-info">
              <label for="name">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                v-model="contactData.name"
                class="contact-field"
              />
              <label for="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Email address*"
                v-model="contactData.email"
                class="contact-field"
                required
              />
            </div>
            <div class="form-textarea">
              <label for="message">Message:</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Message*"
                v-model="contactData.message"
                class="contact-field"
                required
              />
            </div>
            <div class="form-send">
              <input type="submit" value="Send" class="btn-send" />
            </div>
          </form>
        </div>
      </div>
    </section>
    <section class="address-container">
      <div class="address-part">
        <h3>Address:</h3>
        <p>SPACE LEARNING & co</p>
        <p>Ebbe Lieberathsgatan 18C</p>
        <p>412 83 Göteborg</p>
      </div>
    </section>

    <section class="about-us">
      <div class="info-container">
        <h2>We have a great philosophy and team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>

    <h2 class="team">The team</h2>
    <section class="all-employees">
      <div class="employee">
        <img
          src="https://images.unsplash.com/photo-1554188248-986adbb73be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
          alt="geometry art"
        />
        <h3>Annika Janefur</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="employee">
        <img
          src="https://images.unsplash.com/photo-1554188248-986adbb73be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
          alt="geometry art"
        />
        <h3>Fiona Bui</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="employee">
        <img
          src="https://images.unsplash.com/photo-1554188248-986adbb73be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
          alt="geometry art"
        />
        <h3>Maryam Chaudhry</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div class="employee">
        <img
          src="https://images.unsplash.com/photo-1554188248-986adbb73be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9"
          alt="geometry art"
        />
        <h3>Emilie Børve Nylén</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2133.208418984307!2d11.998990776539951!3d57.67893704201672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff369d0835015%3A0xba46082e9c214f49!2sIT-H%C3%B6gskolan!5e0!3m2!1ssv!2sse!4v1741253625541!5m2!1ssv!2sse"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  </main>
</template>

<style scoped>
  h1 {
    text-align: center;
  }

  section {
    margin-top: 2em;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .contact-container {
    margin-top: 2em;
    margin-right: 2em;
  }

  .contact-intro-container {
    display: flex;
    flex-direction: column;
    margin-left: 4em;
    margin-top: 6em;
    padding: 6em;
  }

  .p-contact {
    font-size: 1rem;
    color: #ffffffc4;
    margin-bottom: 1.5em;
  }

  .p-obligatory {
    font-size: 0.8rem;
    color: #ffffff9e;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .form-contact-info {
    display: flex;
    align-items: center;
  }

  .form-contact-info label {
    margin: 1em;
  }

  textarea {
    width: 100%;
    margin-top: 1em;
  }

  .contact-field {
    width: 100%;
  }

  .contact-field,
  .btn-send {
    padding: 4px;
    border-radius: 8px;
    font-family: poppins;
  }

  .form-send {
    display: flex;
    justify-content: flex-end;
  }

  .btn-send {
    background-color: #e3cafb;
    border: none;
    padding: 5px 15px 5px 15px;
  }

  .btn-send:hover {
    background-color: #dec1fa;
  }

  .address-container {
    display: flex;
    flex-direction: column;
    background-color: #00000010;
    padding: 2em;
  }

  .all-employees {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .employee {
    border: solid #fe859f 0.5px;
    margin: 10px;
    padding: 30px;
    width: 33%;
  }

  .employee img {
    width: 100%;
  }

  .info-container {
    margin: 2em;

    p {
      margin-top: 1em;
    }
  }

  .team {
    text-align: center;
  }

  iframe {
    width: 100%;
    padding: 2em;
  }

  @media screen and (min-width: 375px) and (max-width: 572px) {
    .form-contact-info {
      flex-direction: column;
    }

    .all-employees {
      flex-direction: column;
    }

    .employee {
      width: auto;
    }
  }

  @media screen and (min-width: 572.1px) and (max-width: 768px) {
    .employee {
      width: 80%;
    }
  }

  @media screen and (min-width: 768.1px) and (max-width: 980px) {
  }

  @media screen and (min-width: 980.1px) {
  }
</style>
