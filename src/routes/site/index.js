const router = require('koa-router')();
const getIndex = require('./getIndex');
const getUser = require('./getUser');
const getChooseLocale = require('./getChooseLocale');
const getLogin = require('./getLogin');
const getLogout = require('./getLogout');
const getProfile = require('./getProfile');
const postLogin = require('./postLogin');

router.get('/', getIndex);
router.get('/:uid([0-9]{20})', getUser);
router.get('/@:urlName', getUser);
router.get('/choose-locale', getChooseLocale);
router.get('/choose-locale/:locale', getChooseLocale);
router.get('/login', getLogin);
router.get('/logout', getLogout);
router.get('/profile', getProfile);
router.get('/json', async (ctx) => {
  ctx.body = {
    title: 'koa2 json',
  };
});
router.post('/login', postLogin);

module.exports = router;
