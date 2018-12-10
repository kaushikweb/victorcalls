import { MyItems } from "./myItems";

export class MyLead {
    leadId: number;
    createUserID: number;
    createDateTime: Date;
    editUserId: string;
    editDateTime: Date;
    name: string;
    email: string;
    phoneNumber: string;
    items: MyItems[];
    companyId: number;
    isAssigned: string;
    cmpctLabel: string;
    assignedUsers: string[];
    assignedToUsers: string;
    leadSource: string;
    status: number;
    assignees: string;
    userNameList: string[];
    selectedUserList: string[];

  }

  //   leadId: number;
  //   createUserID: number;
  //   createDateTime: Date;
  //   editUserId: string;
  //   editDateTime: Date;
  //   name: string;
  //   email: string;
  //   phoneNumber: string;
  //   items: MyItems[];
  //   companyId: number;
  //   isAssigned: Boolean;
  //   cmpctLabel: string;
  //   assignedUsers: string[];
  //   assignedToUsers: string;
  //   leadSource: string;
  //   status: number;
  //   assignees: string;
  //   userNameList: string[];
  //   selectedUserList: string[];