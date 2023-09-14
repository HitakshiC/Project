import { Address, Patient, Route, Scope, UserStatus, MemberType } from './entity';
import { Condition } from './queryRequest';
/**
 * @author <Aniket.P>
 * @description Login request
 * @copyright Supra software solutions, inc
 */
/**
 * Type representing login request
 */
export interface LoginRequest {
    /**
     * username can be email/mobileno
     */
    username: string;
    /**
     * Password
     */
    password: string;
    /**
     * clientId is application ID (Request portal/Admin portal/Partner Portal)
     */
    clientId: string;
}
/**
 * Type representing signup request
 */
export interface SignupRequest {
    /**
     * user fullname
     */
    fullName: string;
    /**
     * user email
     */
    email: string;
    /**
     * user phone
     */
    phone: string;
    /**
     * Password
     */
    password: string;
    /**
     * clientId is application ID (Request portal/Admin portal/Partner Portal)
     */
    clientId?: string;
    /**
     * Default scope
     */
    scopes: Scope[];
    /**
     * Default status
     */
    status: UserStatus;
}
/**
 * Type representing signup request
 */
export interface UpdateUserRequest {
    userId: string;
    fullname?: string;
    phone?: string;
    dob?: string;
    address?: string;
    gender?: 'M' | 'F';
    password?: string;
    status?: UserStatus;
}
/**
 * Type representing create member request
 */
export interface CreateMemberRequest {
    userId: string;
    memberType: MemberType;
    organizationType?: 'NEW_ORG' | 'EXISTING_ORG';
    organizationId?: string;
    locationId?: string;
    organizationName?: string;
    organizationAddress?: Address;
    locationName?: string;
    locationAddress?: Address;
    paymentSource?: string;
}
export interface CreateOrganizationRequest {
    accessCode: string;
    organizationName?: string;
    organizationAddress?: Address;
    paymentCustomer?: string;
}
export interface CreateOrgLocationRequest {
    organizationId: string;
    locationName: string;
    locationAddress: Address;
}
export interface SendEmailRequest {
    bcc?: string[] | string;
    cc?: string[] | string;
    to: string[] | string;
    template?: string;
    templateData?: any;
    html?: string;
    text?: string;
    subject: string;
    from?: string;
}
export interface CreatePaymentCustomer {
    customerEmail: string;
    customerName: string;
    paymentSource: string;
}
export interface ChangePasswordRequest {
    oldPassword: string;
    newPassword: string;
    userId: string;
}
export interface ResetPasswordRequest {
    newPassword: string;
    userId: string;
}
export interface GetCustomerPaymentSource {
    customerId: string;
    paymentMethod: 'bank_account' | 'card';
}
export interface AddPaymentSourceRequest {
    customerId: string;
    paymentSource: string;
}
export interface DeletePaymentSourceRequest {
    customerId: string;
    paymentSourceId: string;
}
export interface UpdateDefaultPaymentSourceRequest {
    customerId: string;
    paymentSourceId: string;
}
export interface NewServiceRequest {
    additionalNotes?: string;
    billingLocation: string;
    appointment?: {
        appointmentDate: string;
        appointmentTime: string;
        facility: {
            name: string;
            address: Address;
        };
        patient: Patient;
    };
    interpreterRequest?: {
        estimatedTime: {
            hours: number;
            minutes: number;
        };
        isMedicalInterpretation: boolean;
        language: string;
        languageCode: string;
        serviceType: 'Phone' | 'In-Person';
    };
    transportRequest?: {
        estimatedVisitTime: {
            hours: number;
            minutes?: number;
        };
        visitType: 'Procedure' | 'Non-Procedure';
        conciergeService: boolean;
        vehicleType: 'Sedan' | 'Wheelchair' | 'Stretcher';
        transport: string;
        routes: Route[];
        totalMiles: number;
    };
}
export interface RequestPreferences {
    transportRequest?: {
        visitType: string;
        conciergeService: boolean;
        vehicleType: string;
        pickupAddress: Address;
        dropoffAddress: Address;
    };
    interpreterRequest?: {
        language: string;
        serviceType: string;
    };
}
export interface LatLng {
    latitude: number;
    longitude: number;
}
export interface GetDistanceRequest {
    origins: LatLng[];
    destinations: LatLng[];
}
export interface AuthorizePaymentRequest {
    amount: number;
    customerId: string;
    currency: 'usd';
    description: string;
    source?: string;
}
export interface ListQueryRequest {
    conditions?: Array<Condition>;
    outputProperties?: Array<string>;
    limit?: number;
    start?: number;
    order?: {
        [key: string]: 1 | -1;
    };
    op?: 'and' | 'or';
}
export interface GetServiceRequest extends ListQueryRequest {
}
export interface GetDirectionRequest {
    origin: LatLng[];
    destination: LatLng[];
}
/**
 * Type representing add patient request
*/
export interface AddPatientRequest {
    fullName: string;
    email: string;
    phone: string;
    address: Address;
    location: string;
    profilepic?: string;
}
export interface GetPatientRequest extends ListQueryRequest {
}
export interface UpdatePatientRequest {
    patientId: string;
    fullName?: string;
    email?: string;
    phone?: string;
    address?: Address;
    location?: string;
    requestPreference?: RequestPreferences;
    status?: 'ACTIVE' | 'DEACTIVE';
}
export interface GetLanguagesRequest {
    serviceType: number;
}
export interface UpdateGeneralSettingRequest {
    userId: string;
    dateFormat: string;
    timeZone: string;
    notifiers: string[];
}
export interface GetMembersRequest extends ListQueryRequest {
    organizationId?: string;
}
export interface AddMemberRequest {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    locationId: string;
    organizationId?: string;
    memberType: 'ORG_USER' | 'ORG_ADMIN';
}
export interface UpdateMemberRequest {
    memberId: string;
    fullname: string;
    email: string;
    phone: string;
    location: string;
    memberType?: 'ORG_USER' | 'ORG_ADMIN';
}
export interface UpdateOrgLocationRequest {
    organizationId: string;
    locationId: string;
    locationName: string;
    locationAddress: Address;
}
