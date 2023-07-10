# petstore

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/petstore
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/petstore
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { Pb } from "petstore";
import { CreateLivingThingsResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb();

sdk.createLivingThings({
  data: {
    animal: [
      {
        age: 592845,
        color: "distinctio",
        id: "d9d8d69a-674e-40f4-a7cc-8796ed151a05",
        name: "Timmy Satterfield",
      },
      {
        age: 870088,
        color: "maiores",
        id: "7cc78ca1-ba92-48fc-8167-42cb73920592",
        name: "Curtis Morissette",
      },
      {
        age: 902599,
        color: "fuga",
        id: "7596eb10-faaa-4235-ac59-55907aff1a3a",
        name: "Jaime O'Hara",
      },
    ],
    birds: {
      food: [
        "quam",
        "molestiae",
      ],
      id: "39251aa5-2c3f-45ad-819d-a1ffe78f097b",
      name: "Sharon Kiehn",
    },
    createdDate: 359444,
    updatedDate: 480894,
  },
  meta: {
    hasMore: false,
    pageNumber: 688661,
  },
  name: "Sophia Jerde I",
}).then((res: CreateLivingThingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [Pb SDK](docs/sdks/pb/README.md)

* [createLivingThings](docs/sdks/pb/README.md#createlivingthings) - create a living thing

### [animals](docs/sdks/animals/README.md)

* [createAnimal](docs/sdks/animals/README.md#createanimal) - create an animal
* [deleteAnimalsById](docs/sdks/animals/README.md#deleteanimalsbyid) - Delete Animal Object
* [getAllAnimals](docs/sdks/animals/README.md#getallanimals) - Your GET endpoint
* [getAllLivingThings](docs/sdks/animals/README.md#getalllivingthings) - Get All living things
* [updateAnimalsById](docs/sdks/animals/README.md#updateanimalsbyid) - Update Animal

### [birds](docs/sdks/birds/README.md)

* [createNewBird](docs/sdks/birds/README.md#createnewbird) - Create new Bird
* [getAllLivingThings](docs/sdks/birds/README.md#getalllivingthings) - Get All living things
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
