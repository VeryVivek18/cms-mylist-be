export default {
  async index(ctx, next) {
    // called by GET /customMovie from custom 01-custom-movie-routes -> custom.ts controller
    const customMovie = strapi.service("api::movie.movie").getCustomMovie();

    // assigning to respose body
    ctx.body = customMovie;
  },
};
