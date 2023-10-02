# Birds
(*birds*)

## Overview

Birds information.

### Available Operations

* [createLivingThings](#createlivingthings) - create a living thing
* [createNewBird](#createnewbird) - Create new Bird
* [getAllLivingThings](#getalllivingthings) - Get All living things

## createLivingThings

Create a living thing

### Example Usage

```typescript
import { Pb } from "petstore";
import { CreateLivingThingsResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb({
  security: {
    key1: "",
  },
});

sdk.birds.createLivingThings({
  data: {
    animal: [
      {
        age: 24488,
        color: "sky blue",
        id: "<ID>",
        name: "loyalty Officer withdrawal",
      },
    ],
    birds: {},
    createdDate: "Fantastic",
    updatedDate: 282771,
  },
  meta: {
    pageNumber: "Orchestrator",
  },
  name: "North Fish",
}).then((res: CreateLivingThingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.ComplexObject](../../models/shared/complexobject.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateLivingThingsResponse](../../models/operations/createlivingthingsresponse.md)>**


## createNewBird

Create a new Bird

### Example Usage

```typescript
import { Pb } from "petstore";
import { CreateNewBirdResponse } from "petstore/dist/sdk/models/operations";
import { NestedBirdAgeUnit } from "petstore/dist/sdk/models/shared";

const sdk = new Pb({
  security: {
    key1: "",
  },
});

sdk.birds.createNewBird({
  age: {
    amount: 5601.46,
    unit: NestedBirdAgeUnit.Years,
  },
  flight: {
    canFly: false,
    wings: {
      count: 959530,
      span: {
        amount: 7898.44,
        unit: "katal",
      },
    },
  },
  food: [
    "digital",
  ],
  id: "<ID>",
  location: [
    {
      geography: {
        latitude: "-69.7312",
        longitutde: "Response",
      },
    },
  ],
  name: "wipe Southwest",
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

const sdk = new Pb({
  security: {
    key1: "",
  },
});

sdk.birds.getAllLivingThings({
  filter: [
    "qua",
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

