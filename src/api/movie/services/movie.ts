/**
 * movie service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::movie.movie",
  ({ strapi }) => ({
    getCustomMovie() {
      return {
        movieName: "Spiderman 3",
        description: "3rd movie",
      };
    },
  })
);
