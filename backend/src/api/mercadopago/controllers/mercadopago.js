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
    const unitPrice = Number(body.unit_price)
    const title = body.title.trim()
    const quantity = Number(body.quantity)

    if(title === undefined || unitPrice === undefined || quantity === undefined){
      ctx.throw(400, "Missing required fields.")
    }

    if(title === ""){
      ctx.throw(400, "Title field cannot be empty.")
    }

    if (isNaN(unitPrice) || isNaN(quantity)){
       ctx.throw(400,"The 'unit_price' and 'quantity' fields must be numerical.")
    }

    if(unitPrice < 4) {
      ctx.throw(400, "The 'unit_price' field must be greater than 4.")
    }

    if(quantity < 1) {
      ctx.throw(400, "The 'quantity' field must be greater than 1.")
    }

    const preference = {
      items: [
        {
          title,
          unit_price: unitPrice,
          quantity
        }
      ]
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
