'use strict';

/**
 * mercadopago controller
 */

const mercadopago = require ('mercadopago');
const path = require("path");
const { createCoreController } = require('@strapi/strapi').factories;

 mercadopago.configure({
   access_token: process.env.TEST_MERCADO_PAGO_TOKEN
 });

module.exports = {
  creatingCheckoutRedirectLink: async (ctx) => {
    const body = ctx.request.body

    const updatedItems = body.items.map(item => {
      return {
        ...item,
        title: item.title.trim(),
      };
    });

    const shipments = body.shipments

    const preference = {
      items: [
        ...updatedItems
      ],
      shipments,
      back_urls: {
        success: "http://localhost:3000/Payment/Success",
        failure: "http://localhost:3000/",
        pending: "http://localhost:3000/"
      },
      // auto_return: "approved",
    }

    try {
      const response = await mercadopago.preferences.create(preference)
      const {id, init_point} = response.body
      return ctx.send( {id, init_point}, 200)
    } catch (err) {
      ctx.send({
         message: err.message,
         status: err.status
        },
        err.status
      )
    }
  }
}
