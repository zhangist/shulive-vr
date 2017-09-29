module.exports = async (ctx) => {
  if (ctx.params.locale) {
    ctx.session.locale = ctx.params.locale;
    ctx.redirect('/');
  } else {
    await ctx.render('site/choose-locale', {
      title: ctx.state.__('choose-locale'),
    });
  }
};
