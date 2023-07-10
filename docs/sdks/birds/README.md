# birds

## Overview

Birds information.

### Available Operations

* [getAllBirds](#getallbirds) - Get Birds
* [getAllData](#getalldata) - Get All data

## getAllBirds

Get All birds

### Example Usage

```typescript
import { Pb } from "petstore";
import { GetAllBirdsResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb();

sdk.birds.getAllBirds().then((res: GetAllBirdsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetAllBirdsResponse](../../models/operations/getallbirdsresponse.md)>**


## getAllData

get All data

### Example Usage

```typescript
import { Pb } from "petstore";
import { GetAllDataResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb();

sdk.birds.getAllData({
  filter: [
    "debitis",
  ],
}).then((res: GetAllDataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetAllDataRequest](../../models/operations/getalldatarequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetAllDataResponse](../../models/operations/getalldataresponse.md)>**

