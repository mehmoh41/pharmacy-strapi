'use strict';

/**
 *  medicine controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::medicine.medicine');
