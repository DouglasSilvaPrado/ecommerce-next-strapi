'use strict';

/**
 * mercadopago service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mercadopago.mercadopago');
