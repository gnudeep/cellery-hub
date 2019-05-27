// ------------------------------------------------------------------------
//
// Copyright 2019 WSO2, Inc. (http://wso2.com)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License
//
// ------------------------------------------------------------------------

import ballerina/config;
import ballerina/mysql;

mysql:Client celleryHubDB = new({
    host: config:getAsString("PROXY_CELLERY_HUB_DB_HOST_HOST"),
    port: config:getAsInt("PROXY_CELLERY_HUB_DB_HOST_PORT"),
    name: config:getAsString("PROXY_CELLERY_HUB_DB_NAME"),
    username: config:getAsString("PROXY_CELLERY_HUB_DB_USERNAME"),
    password: config:getAsString("PROXY_CELLERY_HUB_DB_PASSWORD"),
    dbOptions: {
        useSSL: false,
        allowPublicKeyRetrieval: true
    }
});