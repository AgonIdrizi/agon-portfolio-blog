const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos');

module.exports = withPlugins([withVideos()], {
  images: {
    domains: ['agonidrizi.com', 'localhost']
  }
});
