'use strict';

/**
 * medicine service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::medicine.medicine');
