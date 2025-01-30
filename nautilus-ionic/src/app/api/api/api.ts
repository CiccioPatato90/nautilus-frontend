export * from './associationController.service';
import { AssociationControllerService } from './associationController.service';
export * from './authController.service';
import { AuthControllerService } from './authController.service';
export * from './requestController.service';
import { RequestControllerService } from './requestController.service';
export const APIS = [AssociationControllerService, AuthControllerService, RequestControllerService];
