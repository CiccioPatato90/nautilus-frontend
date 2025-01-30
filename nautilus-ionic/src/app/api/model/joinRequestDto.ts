/**
 * nautilus-central-service API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ContactInfoDto } from './contactInfoDto';
import { HistoryDto } from './historyDto';


export interface JoinRequestDto { 
    associationName?: string;
    timestamp?: string;
    date?: string;
    motivation?: string;
    contactInfo?: ContactInfoDto;
    category?: string;
    urgency?: string;
    location?: string;
    status?: string;
    assignedAdmin?: string;
    priority?: string;
    actionTaken?: string;
    resolutionTimestamp?: string;
    requestSource?: string;
    tags?: Array<string>;
    processingTime?: number;
    history?: Array<HistoryDto>;
}

