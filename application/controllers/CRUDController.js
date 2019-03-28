'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    let crudService = TOOLS.SERVICES.CRUDService;
    let joi = MODULES.JOI;
    let axios = MODULES.AXIOS;
    return {
        /**
         * Get message as a data for response
         * @param param {Object} An object that should contains
         * @param callback {Function} Callback function
         */

        crudCheckController: (params) => {
            return new Promise((resolve, reject) => {
                switch (params.method) {
                case 'POST':
                    crudService.createNewCustom(params.schema, params.value, (err, result) => {
                        let resultData;
                        if (err) {
                            resultData = {code: 500, status: 'Failed', message: 'Failed Save Data ' + params.schema, err: err.message};

                            reject(resultData);
                        } else {
                            resultData = {code: 200, message: 'Successfully saving ' + params.schema + ' data'};

                            resolve(resultData);
                        }
                    });

                    break;
                case 'PUT':
                    crudService.updateCustom(params.schema, params.where, params.value, (err, result) => {
                        let resultData;
                        if (err) {
                            resultData = {code: 500, status: 'Failed', message: 'Failed Update Data ' + params.schema, err: err.message};

                            reject(resultData);
                        } else {
                            resultData = {code: 200, message: 'Successfully update ' + params.schema + ' data'};

                            resolve(resultData);
                        }
                    });
                    break;
                case 'GET':
                    crudService.getAll(params.schema, params.where, params.select, (err, result) => {
                        let resultData;
                        if (err) {
                            resultData = {code: 500, status: 'Failed', message: 'Failed get data ' + params.schema, err: err.message};
                            reject(resultData);
                        } else {
                            resultData = { code: 200, message: 'Successfully get data ' + params.schema };

                            resolve({code: 200, message: 'Successfully get data ' + params.schema, result: result});
                        }
                    });
                    break;
                case 'DELETE':
                    crudService.findOneCustomAndDelete(params.schema, params.where, (err, result) => {
                        let resultData;
                        if (err) {
                            resultData = {code: 500, status: 'Failed', message: 'Failed delete data ' + params.schema, err: err.message};

                            reject(resultData);
                        } else {
                            resultData = { code: 200, message: 'Succesfully deleted data ' + params.schema };

                            resolve({ code: 200, message: 'Succesfully deleted data ' + params.schema });
                        }
                    });
                    break;
                }
            });
        },

        /**
         Creator: @rizki
         Description: controller for joi validation
         Updater @
         last_change: 11-03-2019
         Description_update: -
         */
        validateInputParams: (schema, inputBody) => {
            return new Promise((resolve, reject) => {
                joi.validate(inputBody, schema, {allowUnknown: true}, (err, value) => {
                    err ? reject(err) : resolve(value);
                });
            });
        },

        updateAndGetSiteController: async (params) => {
            axios.defaults.timeout = 800;
            const promise = params.map(async data => {
                try {
                    await axios.get(data.url);
                    data.status = true;
                } catch (err) {
                    data.status = false;
                }
                try {
                    await crudService.updateCustom('Site', {url: data.url}, {status: data.status});
                } catch (err) {
                    return err;
                }
            });
            let loopResult = await Promise.all(promise);
            return loopResult;
        }
    };
};
