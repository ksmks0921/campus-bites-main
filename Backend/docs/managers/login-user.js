const managerLogin = {
    // operation's method
    get: {
      tags: ["Manager"], // operation's tag.
      description: "Manager Login", // operation's desc.
      operationId: "managerLogin", // unique operation id
      parameters: [],
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ManagerLoginInput", // todo input data model
            },
          },
        },
      },
      // expected responses
      responses: {
        // response code
        200: {
          description: "Manager Login Successfully", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ManagerLoginResponse", // todo data model
              },
            },
          },
        },
        // response code
        // 404: {
        //   description: "Todo is not found", // response desc.
        //   content: {
        //     // content-type
        //     "application/json": {
        //       schema: {
        //         $ref: "#/components/schemas/Error", // error data model
        //       },
        //     },
        //   },
        // },
      },
    },
  };

  export default managerLogin;