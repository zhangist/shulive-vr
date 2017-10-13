// const knex = require('./../../db/knexClient');

module.exports = async (ctx) => {
  await ctx.render('site/index', {
    title: '',
  });
};
