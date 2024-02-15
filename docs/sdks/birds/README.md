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

async function run() {
  const sdk = new Pb({
    security: {
      key1: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.birds.createLivingThings({
    data: {
      animal: [
        {},
      ],
      birds: "<value>",
      createdDate: "<value>",
      updatedDate: "<value>",
    },
    meta: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [shared.ComplexObject](../../sdk/models/shared/complexobject.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.CreateLivingThingsResponse](../../sdk/models/operations/createlivingthingsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createNewBird

Create a new Bird

### Example Usage

```typescript
import { Pb } from "petstore";
import { Unit } from "petstore/dist/sdk/models/shared";

async function run() {
  const sdk = new Pb({
    security: {
      key1: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
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
      "<value>",
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
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.NestedBird](../../sdk/models/shared/nestedbird.md)   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateNewBirdResponse](../../sdk/models/operations/createnewbirdresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAllLivingThings

get All living things data

### Example Usage

```typescript
import { Pb } from "petstore";

async function run() {
  const sdk = new Pb({
    security: {
      key1: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.birds.getAllLivingThings({
    filter: [
      "<value>",
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetAllLivingThingsRequest](../../sdk/models/operations/getalllivingthingsrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetAllLivingThingsResponse](../../sdk/models/operations/getalllivingthingsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
