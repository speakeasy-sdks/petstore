# Birds

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
        age: 489549,
        color: "eaque",
        id: "53202c73-d5fe-49b9-8c28-909b3fe49a8d",
        name: "Loren Renner",
      },
    ],
    birds: {
      food: [
        "quos",
      ],
      id: "633323f9-b77f-43a4-9006-74ebf69280d1",
      name: "Omar Kris",
    },
    createdDate: "omnis",
    updatedDate: 7146.97,
  },
  meta: {
    pageNumber: "nihil",
  },
  name: "Tamara Ondricka",
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
    amount: 1372.2,
    unit: NestedBirdAgeUnit.Months,
  },
  flight: {
    canFly: false,
    wings: {
      count: 229219,
      span: {
        amount: 7583.79,
        unit: "accusamus",
      },
    },
  },
  food: [
    "ad",
  ],
  id: "e6a95d8a-0d44-46ce-aaf7-a73cf3be453f",
  location: [
    {
      geography: {
        latitude: "totam",
        longitutde: "nihil",
      },
    },
  ],
  name: "Mamie Durgan",
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
    "libero",
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

