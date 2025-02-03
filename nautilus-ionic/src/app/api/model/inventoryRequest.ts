/**
 * nautilus-central-service API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ObjectId } from './objectId';
import { InventoryChange } from './inventoryChange';
import { RequestType } from './requestType';


export interface InventoryRequest { 
    _id?: ObjectId;
    requestId?: string;
    associationId?: string;
    requestType?: RequestType;
    motivation?: string;
    status?: string;
    tags?: Array<string>;
    updatedAt?: string;
    createdAt?: string;
    inventoryChanges?: Array<InventoryChange>;
    approvedBy?: string;
    approvalDate?: string;
    requestSource?: string;
}
export namespace InventoryRequest {
}


