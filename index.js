// Use jQuery
// Use a library like axios (or fetch) to make a request to your BE.
// Send the body.

// In jQuery you select the form and attach an onSubmit handler
// jQuery axios html simple

// in your submit event:

// axios
//   .get('https://open.kickbox.com/v1/disposable/mailinator.com HTTP/1.1')
//   .then(resp => {
//     console.log(resp.data);
//   });
const define = module => {
  module.export = {
    // data() {
    //   return {
    //     username: '',
    //     email: '',
    //   };
    // },
    methods: {
      submitForm() {
        this.$axios
          .post('/register', {
            username: this.username,
            email: this.email,
          })
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      },
    },
  };
};
