import { MyItems } from "./myItems";

export class MyNewLeads {
    leadId: number;
    createUserID: number;
    createDateTime: Date;
    editUserId: string;
    editDateTime: Date;
    name: string;
    email: string;
    phoneNumber: string;
    items: MyItems[];
    companyid: number;
    isAssigned: Boolean;
    cmpctLabel: string;
    assignedUsers: string[];
    assignedToUsers: string;
    leadSource: string;
    status: number;
    assignees: string;

    userNamesOfLeadItems: string[];
  }