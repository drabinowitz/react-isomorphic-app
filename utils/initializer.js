var Promise = require('bluebird');
var currentPromiseSet;
var isInitializing = false;
module.exports = {
  exec: function (state) {
    var handler;
    var registeredPromises = [];
    currentPromiseSet = registeredPromises;
    isInitializing = true;
    state.routes.forEach(function (route) {
      handler = route.handler;
      if (handler.initialize) {
        handler.initialize(state.params);
      }
    });
    isInitializing = false;
    return Promise.all(registeredPromises);
  },

  generateMixin: function (callback) {
    return {
      statics: {
        initialize: callback
      }
    };
  },

  register: function (servicePromise) {
    if (isInitializing) {
      currentPromiseSet.push(servicePromise);
    }
  }
};
