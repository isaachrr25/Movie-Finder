'use strict';

/**
 * show controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::show.show' , ({ strapi }) => ({

    find: async(ctx) => {
        let shows = await strapi.service('api::show.show').find(ctx.query);
        return shows;
    },

    findOne: async(ctx) => {
        const { id } = ctx.params;
        const { query } = ctx;
        const showEntity = await strapi.service('api::show.show').findOne(id, query);
        return showEntity;
    },

    count: async(ctx) => {
        let showCount = await strapi.query('api::show.show').count(ctx.query);
        return showCount;
    }
}));
