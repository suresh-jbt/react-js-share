import { API_BASE_URL } from '../common/globals';

const AppUtils = {
  demo : function(){
    return fetch(API_BASE_URL + '/demo',{
      method:'GET',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json());
  },
}

module.exports = AppUtils;
