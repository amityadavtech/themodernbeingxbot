export default {
    siteUrl: 'https://beingxbot.tech', 
    generateRobotsTxt: true, 
    changefreq: 'daily', 
    priority: 0.7, 
    sitemapSize: 5000, 
    autoLastmod: true, 
    exclude: ['/404', '/server-sitemap.xml'], 
    transform: async (config, path) => {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.7,
      };
    },
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://beingxbot.tech/sitemap-0.xml', 
        'https://beingxbot.tech/server-sitemap.xml',
      ],
    },
  };
  