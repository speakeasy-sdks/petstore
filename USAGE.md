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