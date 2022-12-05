/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { V1NMStateStatus } from './V1NMStateStatus';
import {
    V1NMStateStatusFromJSON,
    V1NMStateStatusFromJSONTyped,
    V1NMStateStatusToJSON,
} from './V1NMStateStatus';
import type { V1beta1NMStateSpec } from './V1beta1NMStateSpec';
import {
    V1beta1NMStateSpecFromJSON,
    V1beta1NMStateSpecFromJSONTyped,
    V1beta1NMStateSpecToJSON,
} from './V1beta1NMStateSpec';

/**
 * NMState is the Schema for the nmstates API
 * @export
 * @interface V1beta1NMState
 */
export interface V1beta1NMState {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {any}
     * @memberof V1beta1NMState
     */
    apiVersion?: any | null;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {any}
     * @memberof V1beta1NMState
     */
    kind?: any | null;
    /**
     * 
     * @type {any}
     * @memberof V1beta1NMState
     */
    metadata?: any | null;
    /**
     * 
     * @type {V1beta1NMStateSpec}
     * @memberof V1beta1NMState
     */
    spec?: V1beta1NMStateSpec;
    /**
     * 
     * @type {V1NMStateStatus}
     * @memberof V1beta1NMState
     */
    status?: V1NMStateStatus;
}

/**
 * Check if a given object implements the V1beta1NMState interface.
 */
export function instanceOfV1beta1NMState(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1beta1NMStateFromJSON(json: any): V1beta1NMState {
    return V1beta1NMStateFromJSONTyped(json, false);
}

export function V1beta1NMStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1beta1NMState {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'spec': !exists(json, 'spec') ? undefined : V1beta1NMStateSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : V1NMStateStatusFromJSON(json['status']),
    };
}

export function V1beta1NMStateToJSON(value?: V1beta1NMState | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': value.metadata,
        'spec': V1beta1NMStateSpecToJSON(value.spec),
        'status': V1NMStateStatusToJSON(value.status),
    };
}

