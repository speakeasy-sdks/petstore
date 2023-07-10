# Pb SDK

## Overview

An Example Petstore API

### Available Operations

* [createLivingThings](#createlivingthings) - create a living thing

## createLivingThings

Create a living thing

### Example Usage

```typescript
import { Pb } from "petstore";
import { CreateLivingThingsResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb();

sdk.pb.createLivingThings({
  data: {
    animal: [
      {
        age: 565189,
        color: "excepturi",
        id: "d488e1e9-1e45-40ad-aabd-44269802d502",
        name: "Marshall Glover",
      },
      {
        age: 288476,
        color: "delectus",
        id: "63c969e9-a3ef-4a77-9fb1-4cd66ae395ef",
        name: "Rene Reinger",
      },
      {
        age: 533206,
        color: "sapiente",
        id: "3a669970-74ba-4446-9b6e-2141959890af",
        name: "Tommy Kemmer",
      },
    ],
    birds: {
      food: [
        "nemo",
      ],
      id: "16fe4c8b-711e-45b7-bd2e-d028921cddc6",
      name: "Mr. Harry Jaskolski",
    },
    createdDate: "ipsam",
    updatedDate: 420075,
  },
  meta: {
    pageNumber: "eaque",
  },
  name: "Dr. Herman Wolf",
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

