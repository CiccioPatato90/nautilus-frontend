/**
 * nautilus-central-service API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { InventoryChangeDTO } from './inventoryChangeDTO';
import { ObjectId } from './objectId';
import { RequestStatus } from './requestStatus';


export interface InventoryRequestDTO { 
    _id?: ObjectId;
    associationReqId?: string;
    associationSqlId?: number;
    status?: RequestStatus;
    updatedAt?: string;
    createdAt?: string;
    inventoryChanges?: Array<InventoryChangeDTO>;
    inventoryState?: { [key: string]: number; };
    approvedBy?: string;
}
export namespace InventoryRequestDTO {
}


