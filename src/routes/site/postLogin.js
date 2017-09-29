// const knex = require('./../../db/knexClient');

module.exports = async (ctx) => {
  const resualt = {
    type: 'success',
    msg: '',
  };
  if (ctx.request.body.email && ctx.request.body.password) {
    ctx.session.user = {
      email: ctx.request.body.email,
      username: ctx.request.body.email,
    };

    const redirectUrl = ctx.query.redirectUrl
      || ctx.query.returnUrl
      || ctx.query.redirect
      || ctx.query.return;
    if (redirectUrl) {
      ctx.redirect(redirectUrl);
    } else {
      ctx.redirect('/');
    }
  } else {
    resualt.type = 'error';
    resualt.msg = ctx.state.__('email-password-required');
    await ctx.render('site/login', {
      title: ctx.state.__('login'),
      resualt,
    });
  }
};
