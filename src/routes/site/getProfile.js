module.exports = async (ctx) => {
  await ctx.render('site/profile', {
    title: ctx.state.__('profile'),
  });
};
