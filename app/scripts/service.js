'use strict';

angular.module('MEAN')
  .factory('Users', ['$resource', 'CONSTANTS', function ($resource, CONSTANTS) {
    return $resource(CONSTANTS.API_URL+'/users/:id', {id: '@_id'}, 
    { 
      update: {
        method: 'PUT',
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      query:{
        method: 'GET'
      },
      save:{
        method:'POST'
      },
      delete:{
        method:'DELETE'
      }     
	});
  }]);
