// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'a01fbab8-1714-4f94-8b67-40d7827a5efd';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1462557168\",\"not_before\":\"1462553268\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDYyNTUzMjY4LCJuYmYiOjE0NjI1NTMyNjgsImV4cCI6MTQ2MjU1NzE2OCwiYXBwaWQiOiJiOWU2ZTA3Yi1jNDNlLTQ3MzEtODVjYS05ODE3ODkyNzI0Y2QiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwib2lkIjoiNGUwNDNmODYtYjMzZC00YzNiLThjNTYtNWM3NTkyOGEzNzBlIiwic3ViIjoiNGUwNDNmODYtYjMzZC00YzNiLThjNTYtNWM3NTkyOGEzNzBlIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwidmVyIjoiMS4wIn0.u2cBDTcta14jetGuXrI_io7hCWDLPXQ_yA_w0EhV3eDWaFBvYXelquK5M8hGz9LpD3McRHHI1iz4Hjmgf-T9XmtHIoN0betgiA2b8rdjzX8mTZkLFytRu73Rs-uaH10NS6Nn41XzBGTL8xMXYgjQ-gKV0Uf1RM26aI0PqJwD2bKrX9Ely9UPJhbKow5dWnTaJEZYZF1bSzwEaBA7WNGO6V5_ypNQMVAYsb-g4epqh3hmXMsd7nqFSjKb2IUnE2LthnW1cqZf5tyP7KKBfyEkky0r9twS9hLMZmNJHujhXR6wasvE0XIOXhMsIYovXJaVeA-o2ayjrQ2RLEnNBxnm_w\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '3ca442d6-35d6-4edb-ab49-d877c8fcab6e',
  'client-request-id': '5ed5e437-e2a2-4b5f-aab6-be9bcc365838',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_552',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'esctx=AAABAAAAiL9Kn2Z27UubvWFPbm0gLSGEBLIx_RTjg2fDDKEiV0u8EAFad5FTgJPBY8TVFu0747Wr5gSSiEKJn9ZFefyiTZiI5JNKmeasnv-JKqdf_yuXFMrYFGbKJ6wbYBFoR7xnf2YnSgf2oUX14n0XHldx1-VLOWiKFVjR4aQxPUP2MwIZ9UqqxWxLopvKL6nDLaHSIAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 06 May 2016 16:52:47 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/72f988bf-86f1-41af-91ab-2d7cd011db47/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1462557168\",\"not_before\":\"1462553268\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNDYyNTUzMjY4LCJuYmYiOjE0NjI1NTMyNjgsImV4cCI6MTQ2MjU1NzE2OCwiYXBwaWQiOiJiOWU2ZTA3Yi1jNDNlLTQ3MzEtODVjYS05ODE3ODkyNzI0Y2QiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwib2lkIjoiNGUwNDNmODYtYjMzZC00YzNiLThjNTYtNWM3NTkyOGEzNzBlIiwic3ViIjoiNGUwNDNmODYtYjMzZC00YzNiLThjNTYtNWM3NTkyOGEzNzBlIiwidGlkIjoiNzJmOTg4YmYtODZmMS00MWFmLTkxYWItMmQ3Y2QwMTFkYjQ3IiwidmVyIjoiMS4wIn0.u2cBDTcta14jetGuXrI_io7hCWDLPXQ_yA_w0EhV3eDWaFBvYXelquK5M8hGz9LpD3McRHHI1iz4Hjmgf-T9XmtHIoN0betgiA2b8rdjzX8mTZkLFytRu73Rs-uaH10NS6Nn41XzBGTL8xMXYgjQ-gKV0Uf1RM26aI0PqJwD2bKrX9Ely9UPJhbKow5dWnTaJEZYZF1bSzwEaBA7WNGO6V5_ypNQMVAYsb-g4epqh3hmXMsd7nqFSjKb2IUnE2LthnW1cqZf5tyP7KKBfyEkky0r9twS9hLMZmNJHujhXR6wasvE0XIOXhMsIYovXJaVeA-o2ayjrQ2RLEnNBxnm_w\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '3ca442d6-35d6-4edb-ab49-d877c8fcab6e',
  'client-request-id': '5ed5e437-e2a2-4b5f-aab6-be9bcc365838',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_552',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'esctx=AAABAAAAiL9Kn2Z27UubvWFPbm0gLSGEBLIx_RTjg2fDDKEiV0u8EAFad5FTgJPBY8TVFu0747Wr5gSSiEKJn9ZFefyiTZiI5JNKmeasnv-JKqdf_yuXFMrYFGbKJ6wbYBFoR7xnf2YnSgf2oUX14n0XHldx1-VLOWiKFVjR4aQxPUP2MwIZ9UqqxWxLopvKL6nDLaHSIAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 06 May 2016 16:52:47 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourceGroups/rsmt-rnr-rg/providers/Microsoft.ServerManagement/gateways/mygateway?api-version=2015-07-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/rsmt-rnr-rg/providers/microsoft.servermanagement/gateways/mygateway\",\"name\":\"mygateway\",\"type\":\"microsoft.servermanagement/gateways\",\"location\":\"centralus\",\"etag\":\"W/\\\"datetime'2016-05-05T20%3A42%3A15.1615612Z'\\\"\",\"properties\":{\"created\":\"2016-05-05T19:40:53.7694898Z\",\"updated\":\"2016-05-05T20:42:14.6264093Z\",\"autoUpgrade\":\"On\",\"desiredVersion\":null,\"minimumVersion\":\"1.0.0.0\",\"betaFeatures\":\"Off\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '474',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b3f86afc-f597-4fcf-9783-0193fc9d25e5',
  'x-managementservice-fileversion': '1.0.1187.3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'b3f86afc-f597-4fcf-9783-0193fc9d25e5',
  'x-ms-routing-request-id': 'WESTUS:20160506T165248Z:b3f86afc-f597-4fcf-9783-0193fc9d25e5',
  date: 'Fri, 06 May 2016 16:52:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourceGroups/rsmt-rnr-rg/providers/Microsoft.ServerManagement/gateways/mygateway?api-version=2015-07-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/a01fbab8-1714-4f94-8b67-40d7827a5efd/resourcegroups/rsmt-rnr-rg/providers/microsoft.servermanagement/gateways/mygateway\",\"name\":\"mygateway\",\"type\":\"microsoft.servermanagement/gateways\",\"location\":\"centralus\",\"etag\":\"W/\\\"datetime'2016-05-05T20%3A42%3A15.1615612Z'\\\"\",\"properties\":{\"created\":\"2016-05-05T19:40:53.7694898Z\",\"updated\":\"2016-05-05T20:42:14.6264093Z\",\"autoUpgrade\":\"On\",\"desiredVersion\":null,\"minimumVersion\":\"1.0.0.0\",\"betaFeatures\":\"Off\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '474',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b3f86afc-f597-4fcf-9783-0193fc9d25e5',
  'x-managementservice-fileversion': '1.0.1187.3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'b3f86afc-f597-4fcf-9783-0193fc9d25e5',
  'x-ms-routing-request-id': 'WESTUS:20160506T165248Z:b3f86afc-f597-4fcf-9783-0193fc9d25e5',
  date: 'Fri, 06 May 2016 16:52:48 GMT',
  connection: 'close' });
 return result; }]];