module.exports = {
  siteUrl: 'https://beingxbot.tech', 
  generateRobotsTxt: true, 
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/404', '/server-sitemap.xml'], 
  autoLastmod: true,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
    };
  },
};
