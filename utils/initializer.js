var Promise = require('bluebird');
var currentPromiseSet;

module.exports = {
  exec: function (state) {
    var handler;
    var registeredPromises = [];
    currentPromiseSet = registeredPromises;
    state.routes.forEach(function (route) {
      handler = route.handler;
      if (handler.initialize) {
        handler.initialize(state.params);
      }
    });
    return Promise.all(registeredPromises);
  },

  register: function (servicePromise) {
    currentPromiseSet.push(servicePromise);
  }
};
