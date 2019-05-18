'use strict';

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.passport = {
  enable: false,
  package: 'egg-passport',
};

exports.sessionRedis = {
  enable: false,
  package: 'egg-session-redis',
};

exports.redis = {
  enable: false,
  package: 'egg-redis',
};

exports.sequelize = {
  enable: false,
  package: 'egg-sequelize',
};
