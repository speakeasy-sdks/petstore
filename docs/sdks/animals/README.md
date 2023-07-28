# animals

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
import { CreateAnimalResponse, CreateAnimalSecurity } from "petstore/dist/sdk/models/operations";

const sdk = new Pb();
const operationSecurity: CreateAnimalSecurity = {
  key1: "",
};

sdk.animals.createAnimal({
  age: 870013,
  color: "at",
  id: "f7cc78ca-1ba9-428f-8816-742cb7392059",
  name: "Sheryl Fadel",
}, operationSecurity).then((res: CreateAnimalResponse) => {
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


## createLivingThings

Create a living thing

### Example Usage

```typescript
import { Pb } from "petstore";
import { CreateLivingThingsResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb();

sdk.animals.createLivingThings({
  data: {
    animal: [
      {
        age: 902599,
        color: "fuga",
        id: "7596eb10-faaa-4235-ac59-55907aff1a3a",
        name: "Jaime O'Hara",
      },
      {
        age: 414369,
        color: "quam",
        id: "739251aa-52c3-4f5a-9019-da1ffe78f097",
        name: "Thomas Batz",
      },
      {
        age: 979587,
        color: "dicta",
        id: "5471b5e6-e13b-499d-888e-1e91e450ad2a",
        name: "Marty Green",
      },
      {
        age: 397821,
        color: "cupiditate",
        id: "802d502a-94bb-44f6-bc96-9e9a3efa77df",
        name: "Keith Gulgowski",
      },
    ],
    birds: {
      food: [
        "aliquid",
        "laborum",
      ],
      id: "e395efb9-ba88-4f3a-a699-7074ba4469b6",
      name: "Brandon Brakus V",
    },
    createdDate: 590873,
    updatedDate: 5743.25,
  },
  meta: {
    hasMore: false,
    pageNumber: 653201,
  },
  name: "Shaun Hammes",
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

const sdk = new Pb();

sdk.animals.deleteAnimalsById({
  id: "e2516fe4-c8b7-411e-9b7f-d2ed028921cd",
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
  age: "pariatur",
  color: "maxime",
  id: "692601fb-576b-40d5-b0d3-0c5fbb258705",
  name: "Ruby Auer",
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

const sdk = new Pb();

sdk.animals.getAllLivingThings({
  filter: [
    "dolor",
    "vero",
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
import { UpdateAnimalsByIdResponse, UpdateAnimalsByIdSecurity } from "petstore/dist/sdk/models/operations";

const sdk = new Pb();
const operationSecurity: UpdateAnimalsByIdSecurity = {
  key1: "",
};

sdk.animals.updateAnimalsById({
  animals: {
    age: 345352,
    color: "hic",
    id: "e9b90c28-909b-43fe-89a8-d9cbf4863332",
    name: "Mindy Marks",
  },
  id: "7f3a4100-674e-4bf6-9280-d1ba77a89ebf",
}, operationSecurity).then((res: UpdateAnimalsByIdResponse) => {
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

