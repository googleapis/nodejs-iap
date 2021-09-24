// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent) {
  // [START iap_v1_generated_IdentityAwareProxyOAuthService_ListBrands_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. GCP Project number/id.
   *  In the following format: projects/{project_number/id}.
   */
  // const parent = 'abc123'

  // Imports the Iap library
  const {IdentityAwareProxyOAuthServiceClient} = require('@google-cloud/iap').v1;

  // Instantiates a client
  const iapClient = new IdentityAwareProxyOAuthServiceClient();

  async function listBrands() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const response = await iapClient.listBrands(request);
    console.log(response);
  }

  listBrands();
  // [END iap_v1_generated_IdentityAwareProxyOAuthService_ListBrands_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
