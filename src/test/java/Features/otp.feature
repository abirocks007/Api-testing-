Feature: check the otp
  Background: 
    * url baseUrl

    Scenario: should able to run with valid otp
      Given path "/identity/api/v1/auth/challenge"
      When request {"appCode": #(appCode),"mobile": #(phoneNo),"challengeType": "SMS-OTP"}
      And method post
      Then status 200
      And print response
