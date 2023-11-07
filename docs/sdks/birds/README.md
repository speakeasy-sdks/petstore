# Birds
(*.birds*)

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

(async() => {
  const sdk = new Pb({
    security: {
      key1: "",
    },
  });

  const res = await sdk.birds.createLivingThings({
    data: {
      animal: [
        {},
      ],
      birds: "string",
      createdDate: "string",
      updatedDate: "string",
    },
    meta: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { Unit } from "petstore/dist/sdk/models/shared";

(async() => {
  const sdk = new Pb({
    security: {
      key1: "",
    },
  });

  const res = await sdk.birds.createNewBird({
    age: {
      unit: Unit.Years,
    },
    flight: {
      wings: {
        span: {},
      },
    },
    food: [
      "string",
    ],
    location: [
      {
        geography: {},
      },
    ],
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Pb({
    security: {
      key1: "",
    },
  });

  const res = await sdk.birds.getAllLivingThings({
    filter: [
      "string",
    ],
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetAllLivingThingsRequest](../../models/operations/getalllivingthingsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetAllLivingThingsResponse](../../models/operations/getalllivingthingsresponse.md)>**

