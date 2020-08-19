export default {
    // FUNCTIONS
  
    isEmpty(obj) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) return false;
      }
      return true;
    }

};

//usage: import Utils from './utils'