function fn() {
  var env = "develop"; // get java system property 'karate.env'
  karate.log('karate.env system property was:', env);
  var otp=0;

  var phoneNo="9876543210";
  var appCode="ecomapp";
var config = { // base config JSON
    baseUrl: 'http://devapi.rodeotechnologies.com',
    phoneNo: '9876543210',
    appCode: 'ecomapp'
  };
  if (env=='develop') {
      config.baseUrl = 'http://devapi.rodeotechnologies.com'; // a custom 'intelligent' default

      config.phoneNo='9566656578';
      config.appCode='ecomapp';


    }
  else if (env == 'prod') {
    // over-ride only those that need to be
    config.baseUrl = 'https://produrl.in/';
    }
    return config;
}