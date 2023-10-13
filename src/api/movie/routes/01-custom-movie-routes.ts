export default {
  routes: [
    {
      method: "GET",
      path: "/customMovie",
      // calls index method in  /controller/custom.ts file
      handler: "custom.index",
      config: {
        auth: false,
      },
    },
  ],
};
