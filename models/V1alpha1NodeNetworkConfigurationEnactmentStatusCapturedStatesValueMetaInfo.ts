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
/**
 * 
 * @export
 * @interface V1alpha1NodeNetworkConfigurationEnactmentStatusCapturedStatesValueMetaInfo
 */
export interface V1alpha1NodeNetworkConfigurationEnactmentStatusCapturedStatesValueMetaInfo {
    /**
     * 
     * @type {any}
     * @memberof V1alpha1NodeNetworkConfigurationEnactmentStatusCapturedStatesValueMetaInfo
     */
    time?: any | null;
    /**
     * 
     * @type {any}
     * @memberof V1alpha1NodeNetworkConfigurationEnactmentStatusCapturedStatesValueMetaInfo
     */
    version?: any | null;
}

/**
 * Check if a given object implements the V1alpha1NodeNetworkConfigurationEnactmentStatusCapturedStatesValueMetaInfo interface.
 */
export function instanceOfV1alpha1NodeNetworkConfigurationEnactmentStatusCapturedStatesValueMetaInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function V1alpha1NodeNetworkConfigurationEnactmentStatusCapturedStatesValueMetaInfoFromJSON(json: any): V1alpha1NodeNetworkConfigurationEnactmentStatusCapturedStatesValueMetaInfo {
    return V1alpha1NodeNetworkConfigurationEnactmentStatusCapturedStatesValueMetaInfoFromJSONTyped(json, false);
}

export function V1alpha1NodeNetworkConfigurationEnactmentStatusCapturedStatesValueMetaInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1NodeNetworkConfigurationEnactmentStatusCapturedStatesValueMetaInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'time': !exists(json, 'time') ? undefined : json['time'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function V1alpha1NodeNetworkConfigurationEnactmentStatusCapturedStatesValueMetaInfoToJSON(value?: V1alpha1NodeNetworkConfigurationEnactmentStatusCapturedStatesValueMetaInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'time': value.time,
        'version': value.version,
    };
}
