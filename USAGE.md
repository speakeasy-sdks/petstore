<!-- Start SDK Example Usage -->
```typescript
import { Pb } from "petstore";

(async () => {
    const sdk = new Pb({
        security: {
            key1: "",
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
})();

```
<!-- End SDK Example Usage -->