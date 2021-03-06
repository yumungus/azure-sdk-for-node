// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = '28adf6bf-ce46-4eb0-ba29-b6d1a69ab859';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/28adf6bf-ce46-4eb0-ba29-b6d1a69ab859/resourceGroups/nodeTestGroup9264/providers/Microsoft.Storage/storageAccounts/testacc9889?api-version=2016-01-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '2791ae1c-ea12-4d9f-ba1a-719304edaed8',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '2791ae1c-ea12-4d9f-ba1a-719304edaed8',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160412T192151Z:2791ae1c-ea12-4d9f-ba1a-719304edaed8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Apr 2016 19:21:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/28adf6bf-ce46-4eb0-ba29-b6d1a69ab859/resourceGroups/nodeTestGroup9264/providers/Microsoft.Storage/storageAccounts/testacc9889?api-version=2016-01-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '2791ae1c-ea12-4d9f-ba1a-719304edaed8',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0, Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '2791ae1c-ea12-4d9f-ba1a-719304edaed8',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160412T192151Z:2791ae1c-ea12-4d9f-ba1a-719304edaed8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Apr 2016 19:21:51 GMT',
  connection: 'close' });
 return result; }]];