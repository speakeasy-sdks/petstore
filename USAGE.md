<!-- Start SDK Example Usage -->
```typescript
import { Pb } from "petstore";
import { CreatePetsResponse } from "petstore/dist/sdk/models/operations";

const sdk = new Pb();

sdk.pets.createPets().then((res: CreatePetsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->