////////////////////////////////////////////////////////////////////////////
//
// Copyright 2016 Realm Inc.
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
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////

'use strict';

import Realm from 'realm';

class Leads extends Realm.Object {}
Leads.schema = {
    name: 'leads',
    primaryKey: 'id',
    properties: {
        id: 'int',
        deleted: {type: 'bool', default: false},
        first_name: 'string',
        last_name: 'string',
        title: 'string',
        details: 'string',
        street: 'string',
        city: 'string',
        state: 'string',
        postal_code: 'string',
        country: 'string',
        contact_number: 'string',
        email: 'string',
        status: 'string',
        category: 'string',
        enquiry_source: 'string',
        customer_type: 'string',
        office_contact_number: 'string',
        company_name: 'string',
        creationDate: 'date'

    },
};
class Calls extends Realm.Object {}
Calls.schema = {
  name: 'calls',
    primaryKey: 'id',
    properties: {
        id: 'int',
        deleted: {type: 'bool', default: false},
        topic: 'string',
       reminders: 'string',
        status: 'string',
        duration: 'string',
       creationDate: 'date',
       startDate: 'date',

    },
};

export default new Realm({schema: [Leads,Calls]});