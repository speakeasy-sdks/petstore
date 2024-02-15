<!-- Start SDK Example Usage [usage] -->
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
        id: "<id>",
        name: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->