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
import { DeleteAnimalsIdResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb();

sdk.animals.deleteAnimalsId({
  id: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
}).then((res: DeleteAnimalsIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [animals](docs/sdks/animals/README.md)

* [deleteAnimalsId](docs/sdks/animals/README.md#deleteanimalsid) - Delete Animal Object
* [getAnimals](docs/sdks/animals/README.md#getanimals) - Your GET endpoint
* [patchAnimalsId](docs/sdks/animals/README.md#patchanimalsid) - Update Animal
* [postAnimals](docs/sdks/animals/README.md#postanimals) - Post animals description
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
