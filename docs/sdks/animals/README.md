# animals

## Overview

Work with Animals.

### Available Operations

* [createAnimal](#createanimal) - create an animal
* [deleteAnimalsById](#deleteanimalsbyid) - Delete Animal Object
* [getAllAnimals](#getallanimals) - Your GET endpoint
* [getAllData](#getalldata) - Get All data
* [updateAnimalsById](#updateanimalsbyid) - Update Animal

## createAnimal

Post animals description

### Example Usage

```typescript
import { Pb } from "petstore";
import { CreateAnimalResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb();

sdk.animals.createAnimal({
  age: 870013,
  color: "at",
  id: "f7cc78ca-1ba9-428f-8816-742cb7392059",
  name: "Sheryl Fadel",
}, {
  key1: "",
}).then((res: CreateAnimalResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateAnimalRequestBody](../../models/operations/createanimalrequestbody.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.CreateAnimalSecurity](../../models/operations/createanimalsecurity.md)       | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateAnimalResponse](../../models/operations/createanimalresponse.md)>**


## deleteAnimalsById

Delete the animal

### Example Usage

```typescript
import { Pb } from "petstore";
import { DeleteAnimalsByIdResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb();

sdk.animals.deleteAnimalsById({
  id: "fea7596e-b10f-4aaa-a352-c5955907aff1",
}).then((res: DeleteAnimalsByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DeleteAnimalsByIdRequest](../../models/operations/deleteanimalsbyidrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DeleteAnimalsByIdResponse](../../models/operations/deleteanimalsbyidresponse.md)>**


## getAllAnimals

Get Animals Description

### Example Usage

```typescript
import { Pb } from "petstore";
import { GetAllAnimalsResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb();

sdk.animals.getAllAnimals({
  age: "mollitia",
  color: "dolorem",
  id: "a2fa9467-7392-451a-a52c-3f5ad019da1f",
  name: "Caleb Koss",
}).then((res: GetAllAnimalsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetAllAnimalsRequest](../../models/operations/getallanimalsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetAllAnimalsResponse](../../models/operations/getallanimalsresponse.md)>**


## getAllData

get All data

### Example Usage

```typescript
import { Pb } from "petstore";
import { GetAllDataResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb();

sdk.animals.getAllData({
  filter: [
    "omnis",
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


## updateAnimalsById

Update the animal object

### Example Usage

```typescript
import { Pb } from "petstore";
import { UpdateAnimalsByIdResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb();

sdk.animals.updateAnimalsById({
  animals: {
    age: 451159,
    color: "cum",
    id: "0074f154-71b5-4e6e-93b9-9d488e1e91e4",
    name: "Elizabeth Orn",
  },
  id: "abd44269-802d-4502-a94b-b4f63c969e9a",
}, {
  key1: "",
}).then((res: UpdateAnimalsByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateAnimalsByIdRequest](../../models/operations/updateanimalsbyidrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.UpdateAnimalsByIdSecurity](../../models/operations/updateanimalsbyidsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateAnimalsByIdResponse](../../models/operations/updateanimalsbyidresponse.md)>**

