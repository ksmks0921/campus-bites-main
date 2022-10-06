const components = {
  components: {
    schemas: {
      // id model
      // id: {
      //   type: "string", // data type
      //   description: "An id of a todo", // desc
      //   example: "tyVgf", // example of an id
      // },
      // user model
      RegistrationInput: {
        type: "object", // data type
        properties: {
          email: {
            type: "string", // data-type
            description: "Student Email", // desc
            example: "jamesworker@student.edu", // example of an id
          },
          password: {
            type: "string", // data-type
            description: "Password", // desc
            example: "myPassword", // example of an id
          },
          confirmPasssword: {
            type: "string", // data-type
            description: "Confirm Password", // desc
            example: "myPassword", // example of an id
          },
          name: {
            type: "string", // data-type
            description: "Student Full name", // desc
            example: "James Worker", // example of a title
          },
          year: {
            type: "string", // data-type
            description: "Current study year", // desc
            example: "Junior", // example of a title
          },
          phoneNumber: {
            type: "string", // data-type
            description: "Student Phone number", // desc
            example: "+1 2344 5656", // example of a title
          },
          university: {
            type: "string", // data-type
            description: "Student University", // desc
            example: "University Of Minnesota", // example of a title
          },
        },
      },
      // Todo input model
      LoginInput: {
        type: "object", // data type
        properties: {
          email: {
            type: "string", // data type
            description: "User Email", // desc
            example: "amigo@westuni.edu", // example of a title
          },
          password: {
            type: "string", // data type
            description: "User Password", // desc
            example: "TestPassword", // example of a title
          },
        },
      },
      ManagerLoginInput:{
        type: "object", // data type
        properties: {
          username: {
            type: "string", // data type
            description: "Manager Username", // desc
            example: "amigo", // example of a title
          },
          password: {
            type: "string", // data type
            description: "Manager Password", // desc
            example: "TestPassword", // example of a title
          },
        },
      },
      ManagerLoginResponse:{
        type: "object", // data type
        properties: {
          username: {
            type: "string", // data type
            description: "Manager Username", // desc
            example: "amigo", // example of a title
          },
          token: {
            type: "string", // data-type
            description: "Student University", // desc
            example:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODYwOGI5OGQwZDk1N2FhM2YxZGY1NSIsImlhdCI6MTY1Mjk1MTIyNSwiZXhwIjoxNjU1NTQzMjI1fQ.92m4c5m57NGqlhhs257C_7GStbadHZ4ASg2ievfLBw0",
          },
        },
      },
      RegistrationSuccess: {
        type: "object", // data type
        properties: {
          _id: {
            type: "string", // data-type
            description: "User id", // desc
            example: "628608b98d0d957aa3f1df55", // example of a title
          },
          name: {
            type: "string", // data-type
            description: "Student Full name", // desc
            example: "James Worker", // example of a title
          },
          email: {
            type: "string", // data-type
            description: "Student Email", // desc
            example: "jamesworker@student.edu", // example of an id
          },
          name: {
            type: "string", // data-type
            description: "Student Full name", // desc
            example: "James Worker", // example of a title
          },
          year: {
            type: "string", // data-type
            description: "Current study year", // desc
            example: "Junior", // example of a title
          },
          phoneNumber: {
            type: "string", // data-type
            description: "Student Phone number", // desc
            example: "+1 2344 5656", // example of a title
          },
          token: {
            type: "string", // data-type
            description: "Student University", // desc
            example:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODYwOGI5OGQwZDk1N2FhM2YxZGY1NSIsImlhdCI6MTY1Mjk1MTIyNSwiZXhwIjoxNjU1NTQzMjI1fQ.92m4c5m57NGqlhhs257C_7GStbadHZ4ASg2ievfLBw0",
          },
          university: {
            type: "string", // data-type
            description: "Student University", // desc
            example: "University Of Minnesota", // example of a title
          },
          idImage:{
            type: "string", // data-type
            description: "Image url", // desc
            example: "https://cloudinary.com/test/iisdjkskd.png", // example of a title

          }
        },
      },
      // error model
      Error: {
        type: "object", //data type
        properties: {
          message: {
            type: "string", // data type
            description: "Error message", // desc
            example: "Not found", // example of an error message
          },
          internal_code: {
            type: "string", // data type
            description: "Error internal code", // desc
            example: "Invalid parameters", // example of an error internal code
          },
        },
      },
    },
  },
};

export default components;
