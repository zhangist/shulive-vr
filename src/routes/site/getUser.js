const knex = require('./../../db/knexClient');

module.exports = async (ctx) => {
  let where;
  if ((/^[0-9]{20}$/).test(ctx.params.uid)) {
    where = { 'user_local.id': ctx.params.uid };
  } else if ((/^[0-9a-zA-Z-]+$/).test(ctx.params.urlName)) {
    where = { 'user.url_name': ctx.params.urlName };
  }

  if (where) {
    const userData = await knex('user_local').select()
      .where(where)
      .rightJoin('shulive.user', 'shulive.user.id', 'user_local.id');
    if (userData && userData[0]) {
      await ctx.render('site/user', {
        title: userData[0].name,
        userData: userData[0],
      });
    } else {
      await ctx.render('404', {
        title: ctx.state.__('not-found'),
      });
    }
  } else {
    await ctx.render('404', {
      title: ctx.state.__('not-found'),
    });
  }
};
