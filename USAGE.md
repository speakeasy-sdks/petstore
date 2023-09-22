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
  age: 548814,
  color: "provident",
  id: "bd9d8d69-a674-4e0f-867c-c8796ed151a0",
  name: "Estelle Will",
}).then((res: CreateAnimalResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->