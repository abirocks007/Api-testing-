function fn() {
  var env = karate.env; // get java system property 'karate.env'
  karate.log('karate.env system property was:', env);
  var otp=0;

  var phoneNo="9876543210";
  var appCode="ecomapp";
var config = { // base config JSON
    baseUrl: 'http://localhost:8081',
  };
  if (env=='develop') {
      config.baseUrl = "devapi.rodeotechnologies.com"; // a custom 'intelligent' default

      config.phoneNo="9876543210";
      config.appCode="ecomapp";


    }
  else if (env == 'prod') {
    // over-ride only those that need to be
    config.baseUrl = 'https://produrl.in/';
    }
}