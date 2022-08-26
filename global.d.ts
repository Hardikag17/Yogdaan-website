interface Window {
  ethereum: any;
}
interface YogdaanContextInterface {
  account: string;
  walletConnected: boolean;
  web3: string;
  Contract: Contract;
  accountType: number;
  id: number;
}

interface ForumMetadata {
  shgid: string;
  title: string;
  description: string;
  location: string;
}

enum UserType {
  PRESIDENT,
  VICE_PRESIDENT,
  TREASURER,
  MEMBER,
  NONE,
  ADMIN,
}

enum Gender {
  MALE,
  FEMALE,
  OTHER,
}

enum RequestStatus {
  APPROVED,
  COMPLETED,
  REJECTED,
  IN_PROCESS,
}

interface RequestMetadata {
  SHGId: number;
  requestId: number;
  userId: number;
  amount: number;
  description: string;
  loanTime: number;
  status: RequestStatus;
}

interface ApprovedRequestMetadata {
  SHGId: number;
  userId: number;
  amount: number;
  nextEMI: number;
  lastEMI: number;
  description: string;
  loanTime: number;
}

interface Loc {
  state: string;
  district: string;
  blockName: string;
  panchyatName: string;
  villageName: string;
}

interface SHG {
  id: number;
  users: number[];
  name: string;
  location: Loc;
  dateOfFormation: string;
  currentBalance: number;
  owedBalance: number;
  loansGiven: number[];
  loansTaken: number[];
  baseIntrest: number;
}

interface User {
  id: string;
  name: string;
  aadhar: string;
  mobno: number;
  fatherOrHusbandName: string;
  walletAddress: string;
  loansTaken: number[];
  requests: number[];
  shgid: number;
  userType: UserType;
  gender: Gender;
  location: Location;
}

interface Bank {
  id: number;
  name: string;
  walletAddress: string;
  code: string;
  intrestRate: number;
  requests: number[];
}

interface MemberMetadata {
  srno: number;
  userid: string;
  designation: UserType;
}
