'use strict';

/**
 * movie controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::movie.movie' , ({ strapi }) => ({

    exampleAction: async(ctx) => {
        try {
            ctx.body = 'ok';
        } catch (err) {
            ctx.body = err;
        }
    },

    find: async(ctx) => {
        let movies = await strapi.service('api::movie.movie').find(ctx.query);
        return movies;
    },

    findOne: async(ctx) => {
        const { id } = ctx.params;
        const { query } = ctx;
        const entity = await strapi.service('api::movie.movie').findOne(id, query);
        return entity;
    },

    count: async(ctx) => {
        let movieCount = await strapi.query('api::movie.movie').count(ctx.query);
        return movieCount;
    }
}));
 

   

