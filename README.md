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
import { CreateAnimalResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb({
  security: {
    key1: "",
  },
});

sdk.animals.createAnimal({
  age: 239780,
  color: "maroon",
  id: "<ID>",
  name: "Buckinghamshire TLS",
}).then((res: CreateAnimalResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [animals](docs/sdks/animals/README.md)

* [createAnimal](docs/sdks/animals/README.md#createanimal) - create an animal
* [createLivingThings](docs/sdks/animals/README.md#createlivingthings) - create a living thing
* [deleteAnimalsById](docs/sdks/animals/README.md#deleteanimalsbyid) - Delete Animal Object
* [getAllAnimals](docs/sdks/animals/README.md#getallanimals) - Your GET endpoint
* [getAllLivingThings](docs/sdks/animals/README.md#getalllivingthings) - Get All living things
* [updateAnimalsById](docs/sdks/animals/README.md#updateanimalsbyid) - Update Animal

### [birds](docs/sdks/birds/README.md)

* [createLivingThings](docs/sdks/birds/README.md#createlivingthings) - create a living thing
* [createNewBird](docs/sdks/birds/README.md#createnewbird) - Create new Bird
* [getAllLivingThings](docs/sdks/birds/README.md#getalllivingthings) - Get All living things
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
