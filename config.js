var config = {};

config.channel = 'pps_channel';
config.port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
config.ip = process.env.OPENSHIFT_NODEJS_IP || 'localhost';

module.exports = config;
