# GetAllBirdsResponse


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `birds`                                                  | [shared.Birds](../../models/shared/birds.md)[]           | :heavy_minus_sign:                                       | OK                                                       |
| `contentType`                                            | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `error`                                                  | [shared.ErrorT](../../models/shared/errort.md)           | :heavy_minus_sign:                                       | Internal Server Error                                    |
| `statusCode`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `rawResponse`                                            | [AxiosResponse>](https://axios-http.com/docs/res_schema) | :heavy_minus_sign:                                       | N/A                                                      |