import { Role } from "./Role";
import { Project } from "./project";

export class Registration {
    userName: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
    companyId: number;
    accessFailedCount: number;
    email: string;
    firstName: string;
    lastName: string;
    roleId: string;
    role: Role;
    project: Project;
    createdDateTime: Date;
    assignedUsers: string;
    twoFactorEnabled: boolean;
    securityStamp: string;
    phoneNumberConfirmed: boolean;
    lockoutEndDateUtc: Date;
    lockoutEnabled: boolean;
    id: string;
    emailConfirmed: boolean;
    projectId: number;
    token: string;


    }
    