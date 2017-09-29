const router = require('koa-router')();

router.prefix('/user');

router.get('/', (ctx) => {
  ctx.body = 'this is a users response!';
});

router.get('/bar', (ctx) => {
  ctx.body = 'this is a users/bar response';
});

module.exports = router;
