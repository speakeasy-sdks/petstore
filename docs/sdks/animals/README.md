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
import { CreateAnimalResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb({
  security: {
    key1: "",
  },
});

sdk.animals.createAnimal({
  age: 943749,
  color: "saepe",
  id: "a7596eb1-0faa-4a23-92c5-955907aff1a3",
  name: "Carlos Ziemann",
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
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateAnimalResponse](../../models/operations/createanimalresponse.md)>**


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

sdk.animals.createLivingThings({
  data: {
    animal: [
      {
        age: 253291,
        color: "commodi",
        id: "7739251a-a52c-43f5-ad01-9da1ffe78f09",
        name: "Ms. Karla Aufderhar",
      },
    ],
    birds: {
      food: [
        "maiores",
      ],
      id: "15471b5e-6e13-4b99-9488-e1e91e450ad2",
      name: "Rudy Spencer",
    },
    createdDate: 397821,
    updatedDate: 5528.22,
  },
  meta: {
    hasMore: false,
    pageNumber: 164940,
  },
  name: "Vernon Abshire",
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


## deleteAnimalsById

Delete the animal

### Example Usage

```typescript
import { Pb } from "petstore";
import { DeleteAnimalsByIdResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb({
  security: {
    key1: "",
  },
});

sdk.animals.deleteAnimalsById({
  id: "94bb4f63-c969-4e9a-befa-77dfb14cd66a",
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

const sdk = new Pb({
  security: {
    key1: "",
  },
});

sdk.animals.getAllAnimals({
  age: "accusamus",
  color: "non",
  id: "95efb9ba-88f3-4a66-9970-74ba4469b6e2",
  name: "Danielle Bosco",
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

sdk.animals.getAllLivingThings({
  filter: [
    "provident",
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


## updateAnimalsById

Update the animal object

### Example Usage

```typescript
import { Pb } from "petstore";
import { UpdateAnimalsByIdResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb({
  security: {
    key1: "",
  },
});

sdk.animals.updateAnimalsById({
  animals: {
    age: 551816,
    color: "sint",
    id: "0afa563e-2516-4fe4-88b7-11e5b7fd2ed0",
    name: "Irma Morissette DDS",
  },
  id: "ddc69260-1fb5-476b-8d5f-0d30c5fbb258",
}).then((res: UpdateAnimalsByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateAnimalsByIdRequest](../../models/operations/updateanimalsbyidrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateAnimalsByIdResponse](../../models/operations/updateanimalsbyidresponse.md)>**

