/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Animals } from "./animals";
import { Birds } from "./birds";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Production
     */
    "https://api.petstore.com",
    /**
     * Sandbox
     */
    "https://sandbox-api.petstore.com",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0";
    sdkVersion = "1.15.2";
    genVersion = "2.115.2";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Petstore: REST API for interfacing with Petstore.
 *
 * @remarks
 * An Example Petstore API
 */
export class Pb {
    /**
     * Work with Animals.
     */
    public animals: Animals;
    /**
     * Birds information.
     */
    public birds: Birds;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.animals = new Animals(this.sdkConfiguration);
        this.birds = new Birds(this.sdkConfiguration);
    }
}
