# birds

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

const sdk = new Pb();

sdk.birds.createLivingThings({
  data: {
    animal: [
      {
        age: 216897,
        color: "voluptate",
        id: "ae4203ce-5e6a-495d-8a0d-446ce2af7a73",
        name: "Saul Fay",
      },
      {
        age: 253941,
        color: "enim",
        id: "3f870b32-6b5a-4734-a9cd-b1a8422bb679",
        name: "Shawn Doyle",
      },
    ],
    birds: {
      food: [
        "sunt",
        "ullam",
      ],
      id: "bf0cbb1e-31b8-4b90-b344-3a1108e0adcf",
      name: "Olivia McGlynn IV",
    },
    createdDate: 580447,
    updatedDate: 7875.42,
  },
  meta: {
    pageNumber: "omnis",
  },
  name: "Tiffany Willms",
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

const sdk = new Pb();

sdk.birds.createNewBird({
  age: {
    amount: 8788.7,
    unit: NestedBirdAgeUnit.Days,
  },
  flight: {
    canFly: false,
    wings: {
      count: 492268,
      span: {
        amount: 9413.78,
        unit: "distinctio",
      },
    },
  },
  food: [
    "odio",
    "similique",
    "facilis",
    "vero",
  ],
  id: "74dd39c0-f5d2-4cff-bc70-a45626d43681",
  location: [
    {
      geography: {
        latitude: "maiores",
        longitutde: "quasi",
      },
    },
  ],
  name: "Freda Marks",
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
    "quisquam",
    "saepe",
    "ea",
    "impedit",
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

