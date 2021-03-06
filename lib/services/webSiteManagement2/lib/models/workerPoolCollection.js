/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the WorkerPoolCollection class.
 * @constructor
 * Collection of worker pools
 * @member {array} [value] Collection of resources
 * 
 * @member {string} [nextLink] Link to next page of resources
 * 
 */
function WorkerPoolCollection() {
}

util.inherits(WorkerPoolCollection, Array);

/**
 * Defines the metadata of WorkerPoolCollection
 *
 * @returns {object} metadata of WorkerPoolCollection
 *
 */
WorkerPoolCollection.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'WorkerPoolCollection',
    type: {
      name: 'Composite',
      className: 'WorkerPoolCollection',
      modelProperties: {
        value: {
          required: false,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'WorkerPoolElementType',
                type: {
                  name: 'Composite',
                  className: 'WorkerPool'
                }
            }
          }
        },
        nextLink: {
          required: false,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = WorkerPoolCollection;
