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