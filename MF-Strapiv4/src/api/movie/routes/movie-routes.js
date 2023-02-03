'use strict';

module.exports = {
    routes: [
        {
            method: "GET",
            path: "/movies/count",
            handler: "movie.count"
        }
    ]
}