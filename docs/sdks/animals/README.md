# Animals
(*animals*)

## Overview

Work with Animals.

### Available Operations

* [createAnimal](#createanimal) - create an animal
* [createLivingThings](#createlivingthings) - create a living thing
* [deleteAnimalsById](#deleteanimalsbyid) - Delete Animal Object
* [getAllAnimals](#getallanimals) - Your GET endpoint
* [getAllLivingThings](#getalllivingthings) - Get All living things
* [updateAnimalsById](#updateanimalsbyid) - Update Animal

## createAnimal

Post animals description

### Example Usage

```typescript
import { Pb } from "petstore";

(async() => {
  const sdk = new Pb({
    security: {
      key1: "",
    },
  });

  const res = await sdk.animals.createAnimal({
    color: "white",
    id: "<ID>",
    name: "illo Jeep",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateAnimalRequestBody](../../models/operations/createanimalrequestbody.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateAnimalResponse](../../models/operations/createanimalresponse.md)>**


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

  const res = await sdk.animals.createLivingThings({
    data: {
      animal: [
        {},
      ],
      birds: "Mesquite",
      createdDate: "joule",
      updatedDate: "Granite",
    },
    meta: "Officer",
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


## deleteAnimalsById

Delete the animal

### Example Usage

```typescript
import { Pb } from "petstore";

(async() => {
  const sdk = new Pb({
    security: {
      key1: "",
    },
  });

  const res = await sdk.animals.deleteAnimalsById({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Pb({
    security: {
      key1: "",
    },
  });

  const res = await sdk.animals.getAllAnimals({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetAllAnimalsRequest](../../models/operations/getallanimalsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetAllAnimalsResponse](../../models/operations/getallanimalsresponse.md)>**


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

  const res = await sdk.animals.getAllLivingThings({
    filter: [
      "qua",
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


## updateAnimalsById

Update the animal object

### Example Usage

```typescript
import { Pb } from "petstore";

(async() => {
  const sdk = new Pb({
    security: {
      key1: "",
    },
  });

  const res = await sdk.animals.updateAnimalsById({
    animals: {},
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateAnimalsByIdRequest](../../models/operations/updateanimalsbyidrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateAnimalsByIdResponse](../../models/operations/updateanimalsbyidresponse.md)>**

