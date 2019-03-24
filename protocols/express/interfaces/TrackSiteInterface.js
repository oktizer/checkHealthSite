/**
 * Created by rizkinovrizal on 17/08/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    let crudController = TOOLS.CONTROLLERS.CRUDController;
    let joi = MODULES.JOI;
    let axios = MODULES.AXIOS;

    return {
        /**
         * Interface for get list all new url from db
         * @param previousData {Object} Data from previous handler
         * @param req {Object} Request object (express)
         * @param res {Object} Response object (express)
         * @param next {Function} Callback function for next handler
         */

        getListURLSite: async function (previousData, req, res, next) {
            try {
                let result = await crudController.crudCheckController({value: null, method: 'GET', schema: 'Site'});
                next(null, {listUrl: result.result});
            } catch (err) {
                return next(err, null);
            }
        },

        /**
         * Interface for insert url data into db
         * @param previousData {Object} Data from previous handler
         * @param req {Object} Request object (express)
         * @param res {Object} Response object (express)
         * @param next {Function} Callback function for next handler
         */

        insertURLSite: async function (previousData, req, res, next) {
            try {
                await crudController.crudCheckController({value: previousData, method: req.method, schema: 'Site'});
                delete previousData.url;
                delete previousData.status;
                next(null, null);
            } catch (err) {
                return next(err, null);
            }
        },

        /**
         * Interface for check site status, healthy or not, and then give response status in object
         * @param previousData {Object} Data from previous handler
         * @param req {Object} Request object (express)
         * @param res {Object} Response object (express)
         * @param next {Function} Callback function for next handler
         */

        checkSiteStatus: async (previousData, req, res, next) => {
            let schema = joi.object().keys({
                url: joi.string().uri()
            });
            let value;
            try {
                value = await crudController.validateInputParams(schema, req.body);
            } catch (err) {
                return (err, null);
            }
            let siteObj = {url: value.url};
            try {
                axios.defaults.timeout = 800;
                await axios.get(value.url);
                siteObj.status = true;
                next(null, siteObj);
            } catch (err) {
                siteObj.status = false;
                next(null, siteObj);
            }
        },

        updateAndGetSite: async (previousData, req, res, next) => {
            try {
                let resultList = await crudController.updateAndGetSiteController(previousData.listUrl);
                next(null, resultList);
            } catch (err) {
                return next(err, null);
            }
        },

        deleteSite: async (previousData, req, res, next) => {
            try {
                let resultDelete = await crudController.crudCheckController({where: req.body, method: req.method, schema: 'Site'});
                next(null, resultDelete);
            } catch (err) {
                return next(err, null);
            }
        }
    };
};
