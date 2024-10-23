export interface AppObject {
  _id: string;
  __v?: number;
  id: string;
  publicId: string;
  createdAt?: string;
  updatedAt?: string;
  active?: boolean;
}

export interface Meta {
  statusCode: number;
  success: boolean;
  message?: string;
  pagination?: {
    totalCount: number;
    perPage: number;
    current: number;
    currentPage: string;
  };
}

export interface Account extends AppObject {
  name: string;
  webhooks: string[];
  isDefault: boolean;
  live: boolean;
  pubKey: {
    live: string;
    test: string;
  };
  business: string;
}
export interface FindAccountsParams {
  name?: string;
  isDefault?: boolean;
  live?: boolean;
}

export interface Wallet extends AppObject {
  auth: string;
  account: string;
  accountName: string;
  accountNumber: string;
  bankName: string;
  bankCode: string;
  live: boolean;
  isFavourite: boolean;
  processor: string;
  category: string;
  balance: number;
  currency: string;
  lastUpdated: string;
}
export interface CollectionWallet extends AppObject {
  auth: string | null;
  account: string;
  accountName: string;
  accountNumber: string;
  bankName: string;
  bankCode: string;
  live: boolean;
  processor: string;
  balance: number;
  currency: string;
  lastUpdated: string | null;
  settlementAccount: string | null;
  alias: string | null;
  reference: string | null;
  parentAccountNumber: string | null;
  amount: number | null;
  expiration: string | null;
  active: boolean | null;
  status: string | null;
}

export interface ClientTransaction {
  fee: number;
  actualAmount: number;
}

export interface MetaDataRate {
  rateId: number;
  rate: number;
  sourceCurrency: string;
  destinationCurrency: string;
  convertedAmount: number;
}

export interface MetaDataCredit {
  sourceType: string;
  sourceData: SourceData;
  source: string;
  destination: string;
  destinationType: string;
  destinationData: DestinationData;
  amount: number;
  currency: string;
  actualAmount: number;
  fee: number;
  narration: string;
  balance: number;
}

export interface MetaDataVerifyBeneficiary {
  accountNumber: string;
  bankCode: string;
  bankName: string;
  accountName: string;
}

export interface MetaDataVerifyData {
  narration: string;
  amount: number;
  date: string;
  beneficiary: MetaDataVerifyBeneficiary;
  transactionStatus: string;
  sessionId: string;
  type: string;
}

export interface MetaDataVerify {
  status: string;
  data: {
    status: string;
    message: string;
    data: MetaDataVerifyData;
  };
}

export interface MetaData {
  isThirdParty: boolean;
  rate: MetaDataRate;
  credit: MetaDataCredit;
  verify: MetaDataVerify | null;
}

export interface DestinationData {
  id: number;
  publicId: string;
  bankName: string;
  bankCode: string;
  accountName: string;
  accountNumber: string;
  processor: string;
  clientIds: Record<string, any>;
  nameEnquiryRef: string;
}

export interface SourceData {
  id: number;
  publicId: string;
  bankName: string;
  bankCode: string;
  accountName: string;
  accountNumber: string;
  currency: string;
  reference: string | null;
  processor: string;
}

export interface Rate {
  rateId: number;
  rate: number;
  sourceCurrency: string;
  destinationCurrency: string;
  convertedAmount: number;
}

export interface Credit {
  sourceType: string;
  sourceData: SourceData;
  source: string;
  destination: string;
  destinationType: string;
  destinationData: DestinationData;
  amount: number;
  currency: string;
  actualAmount: number;
  fee: number;
  narration: string;
  balance: number;
}

export interface Verify {
  status: string;
  data: VerifyData;
}

export interface VerifyData {
  status: string;
  message: string;
  data: VerifyTransactionData;
}

export interface VerifyTransactionData {
  narration: string;
  amount: number;
  date: string;
  beneficiary: Beneficiary;
  transactionStatus: string;
  sessionId: string;
  type: string;
}

export interface Beneficiary {
  accountNumber: string;
  bankCode: string;
  bankName: string;
  accountName: string;
}

export interface Transaction extends AppObject {
  auth: string;
  account: string;
  deletedAt: string | null;
  requestSrc: string;
  tags: string[];
  currency: string;
  entry: string;
  destination: string;
  live: boolean;
  destinationType: string;
  destinationData: DestinationData;
  source: string;
  sourceType: string;
  sourceData: SourceData;
  amount: number;
  balance: number;
  clientTransaction: ClientTransaction;
  fee: number;
  feeReference: string;
  actualAmount: number;
  narration: string;
  reference: string;
  debitReference: string | null;
  tRef: string;
  linkRef: string;
  status: string;
  processor: string;
  meta: MetaData;
  currencyPair: string | null;
  batchId: string | null;
  metadata: Record<string, any>;
}

export interface Bank extends AppObject {
  deletedAt: string | null;
  bankName: string;
  bankCode: string;
  nibssBankCode: string;
  country: string;
  slug: string;
  type: string;
  currency: string;
  processor: string;
  meta: Record<string, any>;
}

export interface Balance {
  withdrawableAmount: number;
  availableAmount: number;
}
export interface FindAccountsResponse {
  meta: Meta;
  data: Array<Account>;
}

export interface UpdateAccountRequest {
  webhooks?: Array<string>;
  live?: boolean;
}
export interface UpdateAccountResponse {
  meta: Meta;
  data: Account;
}
export interface CreateWalletRequest {
  accountName: string;
  category: string;
  currency: string;
  emailAddress?: string;
  mobile?: {
    phoneNumber: string;
    isoCode: string;
  };
}
export interface CreateWalletResponse {
  meta: Meta;
  data: Wallet;
}

export interface CreateDisposableCollectionWalletRequest {
  destination: string;
  accountName: string;
  amount: number;
  expireIn: number;
  reference?: string;
}
export interface DisposableCollectionWalletResponse {
  meta: Meta;
  data: CollectionWallet;
}

export interface CreateTransitCollectionWalletRequest {
  accountName: string;
  currency: string;
  settlementAccount: string;
  emailAddress?: string;
  mobile?: {
    phoneNumber: string;
    isoCode: string;
  };
}
export interface TransitCollectionWalletResponse {
  meta: Meta;
  data: CollectionWallet;
}
export interface FindWalletsParams {
  category?: string;
  isFavourite?: boolean;
  live?: boolean;
}

export interface FindWalletsResponse {
  meta: Meta;
  data: Array<Wallet>;
}

export interface GetWalletResponse {
  meta: Meta;
  data: Wallet;
}

export interface GetBalanceResponse {
  meta: Meta;
  data: Balance;
}
export interface GetAllBalancesResponse {
  meta: Meta;
  data: Record<string, any>;
}

export interface CloseWalletResponse {
  meta: Meta;
  data: { publicId: string; accountNumber: string };
}

export interface FindTransactionsParams {
  entry?: 'debit' | 'credit';
  status?: 'pending' | 'processing' | 'success' | 'failed';
  amount?: number;
  live?: boolean;
  createdAt?: { startDate: string; endDate: string };
}

export interface FindTransactionsResponse {
  meta: Meta;
  data: Array<Transaction>;
}

export interface GetOneTransactionResponse {
  meta: Meta;
  data: Transaction;
}

export interface VerifyTransactionResponse {
  meta: Meta;
  data: Transaction;
}

export interface FindBanksResponse {
  meta: Meta;
  data: Array<Bank>;
}

export interface InitiateWalletTransferRequest {
  source: string;
  sourceType: 'VirtualAccount';
  destination: string;
  destinationType: 'VirtualAccount';
  amount: number;
  currency: string;
  narration: string;
  reference?: string;
  nameEnquiryRef?: string;
}

export interface InitiateWalletTransferResponse {
  meta: Meta;
  data: Transaction;
}

export interface InitiateBankTransferRequest {
  source: string;
  accountNumber: string;
  bankCode: string;
  amount: number;
  currency: string;
  narration: string;
  reference?: string;
  saveBeneficiary?: boolean;
  metadata?: Record<string, any>;
}
export interface InitiateBankTransferResponse {
  meta: Meta;
  data: Transaction;
}

export interface BankAccount extends AppObject {
  auth: string;
  account: string;
  accountName: string;
  accountNumber: string;
  bankName: string;
  bankCode: string;
  reference: string;
  live: boolean;
  processor: string;
  currency: string;
  lastUpdated: string;
  version: number;
  beneficiaryType: string;
  clientIds: Record<string, any>;
}

export interface FindBankAccountsParams {
  accountName?: string;
  beneficiaryType?: string;
  live?: boolean;
}

export interface FindBankAccountsResponse {
  meta: Meta;
  data: Array<BankAccount>;
}

export interface GetOneBankAccountResponse {
  meta: Meta;
  data: BankAccount;
}

export interface ValidateBankAccountRequest {
  accountNumber: string;
  bankCode: string;
}

export interface ValidateBankAccountResponse {
  meta: Meta;
  data: BankAccount;
}

export interface AddBankAccountRequest {
  accountNumber: string;
  accountName: string;
  bankName: string;
  bankCode: string;
  beneficiaryType?: 'personal' | 'vba' | 'external';
}

export interface AddBankAccountResponse {
  meta: Meta;
  data: BankAccount;
}

export interface GiroPaySDK {
  findAccounts: (params?: FindAccountsParams) => Promise<FindAccountsResponse>;
  updateAccount: (
    accountId: string,
    payload: UpdateAccountRequest,
  ) => Promise<UpdateAccountResponse>;
  createWallet: (payload: CreateWalletRequest) => Promise<CreateWalletResponse>;
  findWallets: (params?: FindWalletsParams) => Promise<FindWalletsResponse>;
  createDisposableCollectionWallet: (
    payload: CreateDisposableCollectionWalletRequest,
  ) => Promise<DisposableCollectionWalletResponse>;
  createTransitCollectionWallet: (
    payload: CreateTransitCollectionWalletRequest,
  ) => Promise<TransitCollectionWalletResponse>;
  getOneWallet: (walletId: string) => Promise<GetWalletResponse>;
  getBalance: (walletId: string) => Promise<GetBalanceResponse>;
  getAllBalances: () => Promise<GetAllBalancesResponse>;
  closeWallet: (walletId: string) => Promise<CloseWalletResponse>;
  findTransactions: (
    params?: FindTransactionsParams,
  ) => Promise<FindTransactionsResponse>;
  getOneTransaction: (
    transactionId: string,
  ) => Promise<GetOneTransactionResponse>;
  verifyTransaction: (reference: string) => Promise<VerifyTransactionResponse>;
  findBanks: () => Promise<FindBanksResponse>;
  initiateWalletTransfer: (
    payload: InitiateWalletTransferRequest,
  ) => Promise<InitiateWalletTransferResponse>;
  initiateBankTransfer: (
    payload: InitiateBankTransferRequest,
  ) => Promise<InitiateBankTransferResponse>;
  findBankAccounts: (
    params?: FindBankAccountsParams,
  ) => Promise<FindBankAccountsResponse>;
  getOneBankAccount: (
    bankAccountId: string,
  ) => Promise<GetOneBankAccountResponse>;
  validateBankAccount: (
    payload: ValidateBankAccountRequest,
  ) => Promise<ValidateBankAccountResponse>;
  addBankAccount: (
    payload: AddBankAccountRequest,
  ) => Promise<AddBankAccountResponse>;
}
