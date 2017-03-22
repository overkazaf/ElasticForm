const serviceCaches = {};
const firstCharToUpperCase = function(str) {
	const lowerStr = str.toLowerCase();
	return lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1);
};

/**
 * [precheckServiceName 校验是否为合法的Service]
 * @Author   JohnNong
 * @Email    overkazaf@gmail.com
 * @Github   https://github.com/overkazaf
 * @DateTime 2017-03-21T17:15:47+0800
 * @param    {[type]}                     serviceName [description]
 * @return   {[type]}                                 [description]
 */
const precheckServiceName = function(serviceName) {
	return true;
};

module.exports.create = function(serviceName) {
	if (!precheckServiceName(serviceName)) {
		// check if the service name is valid
		throw new Error('Invalid service name:' + serviceName);
	}

	serviceName = firstCharToUpperCase(serviceName);

	if (serviceCaches[serviceName]) {
		return serviceCaches[serviceName];
	}
	
	serviceCaches[serviceName] = require('./' + serviceName + 'Service');
	return serviceCaches[serviceName];
};
