# animals

## Overview

Work with Animals.

### Available Operations

* [deleteAnimalsId](#deleteanimalsid) - Delete Animal Object
* [getAnimals](#getanimals) - Your GET endpoint
* [patchAnimalsId](#patchanimalsid) - Update Animal
* [postAnimals](#postanimals) - Post animals description

## deleteAnimalsId

Delete the animal

### Example Usage

```typescript
import { Pb } from "petstore";
import { DeleteAnimalsIdResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb();

sdk.animals.deleteAnimalsId({
  id: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
}).then((res: DeleteAnimalsIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.DeleteAnimalsIdRequest](../../models/operations/deleteanimalsidrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.DeleteAnimalsIdResponse](../../models/operations/deleteanimalsidresponse.md)>**


## getAnimals

Get Animals Description

### Example Usage

```typescript
import { Pb } from "petstore";
import { GetAnimalsResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb();

sdk.animals.getAnimals({
  age: "impedit",
  color: "cum",
  id: "73920592-9396-4fea-b596-eb10faaa2352",
  name: "Ronnie Mohr",
}).then((res: GetAnimalsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetAnimalsRequest](../../models/operations/getanimalsrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetAnimalsResponse](../../models/operations/getanimalsresponse.md)>**


## patchAnimalsId

Update the animal object

### Example Usage

```typescript
import { Pb } from "petstore";
import { PatchAnimalsIdResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb();

sdk.animals.patchAnimalsId({
  animals: {
    age: 570197,
    color: "accusantium",
    id: "7aff1a3a-2fa9-4467-b392-51aa52c3f5ad",
    name: "Joyce Mueller",
  },
  id: "1ffe78f0-97b0-4074-b154-71b5e6e13b99",
}, {
  key1: "",
}).then((res: PatchAnimalsIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.PatchAnimalsIdRequest](../../models/operations/patchanimalsidrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.PatchAnimalsIdSecurity](../../models/operations/patchanimalsidsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.PatchAnimalsIdResponse](../../models/operations/patchanimalsidresponse.md)>**


## postAnimals

Post animals description

### Example Usage

```typescript
import { Pb } from "petstore";
import { PostAnimalsResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb();

sdk.animals.postAnimals({
  age: 865103,
  color: "modi",
  id: "88e1e91e-450a-4d2a-bd44-269802d502a9",
  name: "Olivia Rice",
}, {
  key1: "",
}).then((res: PostAnimalsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.PostAnimalsRequestBody](../../models/operations/postanimalsrequestbody.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.PostAnimalsSecurity](../../models/operations/postanimalssecurity.md)       | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.PostAnimalsResponse](../../models/operations/postanimalsresponse.md)>**

