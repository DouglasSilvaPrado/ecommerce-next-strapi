'use strict';

/**
 * mercadopago router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/mercadopago',
      handler: 'mercadopago.creatingCheckoutRedirectLink',
    }
  ]
}
