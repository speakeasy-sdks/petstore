# birds

## Overview

Birds information.

### Available Operations

* [createNewBird](#createnewbird) - Create new Bird
* [getAllLivingThings](#getalllivingthings) - Get All living things

## createNewBird

Create a new Bird

### Example Usage

```typescript
import { Pb } from "petstore";
import { CreateNewBirdResponse } from "petstore/dist/sdk/models/operations";
import { NestedBirdAgeUnit } from "petstore/dist/sdk/models/shared";

const sdk = new Pb();

sdk.birds.createNewBird({
  age: {
    amount: 5521.93,
    unit: NestedBirdAgeUnit.Days,
  },
  flight: {
    canFly: false,
    wings: {
      count: 584476,
      span: {
        amount: 456.14,
        unit: "delectus",
      },
    },
  },
  food: [
    "dolore",
  ],
  id: "43a1108e-0adc-4f4b-9218-79fce953f73e",
  location: [
    {
      geography: {
        latitude: "dignissimos",
        longitutde: "hic",
      },
    },
    {
      geography: {
        latitude: "distinctio",
        longitutde: "quod",
      },
    },
    {
      geography: {
        latitude: "odio",
        longitutde: "similique",
      },
    },
    {
      geography: {
        latitude: "facilis",
        longitutde: "vero",
      },
    },
  ],
  name: "Joanne Sporer",
}).then((res: CreateNewBirdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.NestedBird](../../models/shared/nestedbird.md)       | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateNewBirdResponse](../../models/operations/createnewbirdresponse.md)>**


## getAllLivingThings

get All living things data

### Example Usage

```typescript
import { Pb } from "petstore";
import { GetAllLivingThingsResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb();

sdk.birds.getAllLivingThings({
  filter: [
    "impedit",
    "aut",
    "voluptatibus",
  ],
}).then((res: GetAllLivingThingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetAllLivingThingsRequest](../../models/operations/getalllivingthingsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetAllLivingThingsResponse](../../models/operations/getalllivingthingsresponse.md)>**

