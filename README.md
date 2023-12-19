# petstore

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/petstore
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/petstore
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Pb } from "petstore";

async function run() {
    const sdk = new Pb({
        security: {
            key1: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    const res = await sdk.animals.createAnimal({
        color: "white",
        id: "<ID>",
        name: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
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
<!-- End Available Resources and Operations [operations] -->







<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Example

```typescript
import { Pb } from "petstore";

async function run() {
    const sdk = new Pb({
        security: {
            key1: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    let res;
    try {
        res = await sdk.animals.createAnimal({
            color: "white",
            id: "<ID>",
            name: "string",
        });
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.petstore.com` | None |
| 1 | `https://sandbox-api.petstore.com` | None |

#### Example

```typescript
import { Pb } from "petstore";

async function run() {
    const sdk = new Pb({
        serverIdx: 1,
        security: {
            key1: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    const res = await sdk.animals.createAnimal({
        color: "white",
        id: "<ID>",
        name: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Pb } from "petstore";

async function run() {
    const sdk = new Pb({
        serverURL: "https://api.petstore.com",
        security: {
            key1: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    const res = await sdk.animals.createAnimal({
        color: "white",
        id: "<ID>",
        name: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { petstore } from "Pb";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new Pb({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `key1`       | oauth2       | OAuth2 token |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Pb } from "petstore";

async function run() {
    const sdk = new Pb({
        security: {
            key1: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    const res = await sdk.animals.createAnimal({
        color: "white",
        id: "<ID>",
        name: "string",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
