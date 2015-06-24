var nconf = require('nconf');
nconf.set('url', 'mywebsite.com');

nconf.set('database', {
  user: 'username',
  password: 'password',
  server: 'url'
});
