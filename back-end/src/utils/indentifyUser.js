const identifyUser = (genericUserId, role) => {
  const queryParameters = {};
  switch (role) {
    case 'customer':
      queryParameters.userId = genericUserId;
      break;
    
    case 'seller':
      queryParameters.sallerId = genericUserId;
      break;
  
    default:
      queryParameters.id = '';
      break;
  }
  return queryParameters;
};

module.exports = identifyUser;
