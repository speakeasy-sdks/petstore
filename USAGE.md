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