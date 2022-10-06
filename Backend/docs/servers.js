const servers = {
    servers: [process.env.NODE_ENV === 'production' ?
      {
        url: "https://campus-bite.herokuapp.com/", // url
        description: "Staging server", // name
      }:  {
        url: "http://localhost:8090/", // url
        description: "Local server", // name
      },
    ],
  };
  export default servers
