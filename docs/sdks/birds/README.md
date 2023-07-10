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
    amount: 2230.81,
    unit: NestedBirdAgeUnit.Days,
  },
  flight: {
    canFly: false,
    wings: {
      count: 952749,
      span: {
        amount: 6800.56,
        unit: "in",
      },
    },
  },
  food: [
    "illum",
    "maiores",
  ],
  id: "b14cd66a-e395-4efb-9ba8-8f3a66997074",
  location: [
    {
      geography: {
        latitude: "id",
        longitutde: "labore",
      },
    },
    {
      geography: {
        latitude: "labore",
        longitutde: "suscipit",
      },
    },
    {
      geography: {
        latitude: "natus",
        longitutde: "nobis",
      },
    },
  ],
  name: "Mrs. Meghan Collins V",
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
    "provident",
    "quos",
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

