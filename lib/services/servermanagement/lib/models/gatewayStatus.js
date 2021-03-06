/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the GatewayStatus class.
 * @constructor
 * Expanded gateway status information
 * @member {number} [availableMemoryMByte] The available memory on the gateway
 * host machine in megabytes.
 * 
 * @member {number} [gatewayCpuUtilizationPercent] The CPU utilization of the
 * gateway process (numeric value between 0 and 100).
 * 
 * @member {number} [totalCpuUtilizationPercent] CPU Utilization of the whole
 * system.
 * 
 * @member {string} [gatewayVersion] The version of the gateway that is
 * installed on the system.
 * 
 * @member {string} [friendlyOsName] The Plaintext description of the OS on
 * the gateway.
 * 
 * @member {date} [installedDate] The date the gateway was installed
 * 
 * @member {number} [logicalProcessorCount] Number of logical processors in
 * the gateway system.
 * 
 * @member {string} [name] The computer name of the gateway system.
 * 
 * @member {string} [gatewayId] The gateway resource id.
 * 
 * @member {number} [gatewayWorkingSetMByte] The working set size of the
 * gateway process in megabytes.
 * 
 * @member {date} [statusUpdated] UTC date and time when gateway status was
 * last updated
 * 
 */
function GatewayStatus() {
}

/**
 * Defines the metadata of GatewayStatus
 *
 * @returns {object} metadata of GatewayStatus
 *
 */
GatewayStatus.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'GatewayStatus',
    type: {
      name: 'Composite',
      className: 'GatewayStatus',
      modelProperties: {
        availableMemoryMByte: {
          required: false,
          serializedName: 'availableMemoryMByte',
          type: {
            name: 'Number'
          }
        },
        gatewayCpuUtilizationPercent: {
          required: false,
          serializedName: 'gatewayCpuUtilizationPercent',
          constraints: {
            InclusiveMaximum: 100,
            InclusiveMinimum: 0
          },
          type: {
            name: 'Number'
          }
        },
        totalCpuUtilizationPercent: {
          required: false,
          serializedName: 'totalCpuUtilizationPercent',
          type: {
            name: 'Number'
          }
        },
        gatewayVersion: {
          required: false,
          serializedName: 'gatewayVersion',
          type: {
            name: 'String'
          }
        },
        friendlyOsName: {
          required: false,
          serializedName: 'friendlyOsName',
          type: {
            name: 'String'
          }
        },
        installedDate: {
          required: false,
          serializedName: 'installedDate',
          type: {
            name: 'DateTime'
          }
        },
        logicalProcessorCount: {
          required: false,
          serializedName: 'logicalProcessorCount',
          type: {
            name: 'Number'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        gatewayId: {
          required: false,
          serializedName: 'gatewayId',
          type: {
            name: 'String'
          }
        },
        gatewayWorkingSetMByte: {
          required: false,
          serializedName: 'gatewayWorkingSetMByte',
          type: {
            name: 'Number'
          }
        },
        statusUpdated: {
          required: false,
          serializedName: 'statusUpdated',
          type: {
            name: 'DateTime'
          }
        }
      }
    }
  };
};

module.exports = GatewayStatus;
