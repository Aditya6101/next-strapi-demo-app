'use strict';

/**
 * strapi-forum service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::strapi-forum.strapi-forum');
