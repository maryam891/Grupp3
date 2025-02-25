<script>
export default {
  data() {
    return {
      contactData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  //kommentera
  methods: {
    submitContactForm(e) {
      alert("Message sent successfully!");
      this.contactData = {
        name: "",
        email: "",
        message: "",
      };
      e.preventDefault();
    },
  },
};
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
          <!--kommentera-->
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
              ></textarea>
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
        <p>The street 1800</p>
        <p>12111 New York</p>
      </div>
    </section>
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
  width: 90%;
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
  /* cursor: pointer; */
  background-color: #e3cafb;
  width: 10%;
  border: none;
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
</style>
