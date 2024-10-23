interface AppObject$1 {
    _id: string;
    __v?: number;
    id: string;
    publicId: string;
    createdAt?: string;
    updatedAt?: string;
    active?: boolean;
}
interface Meta$1 {
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
interface Account$1 extends AppObject$1 {
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
interface FindAccountsParams$1 {
    name?: string;
    isDefault?: boolean;
    live?: boolean;
}
interface Wallet$1 extends AppObject$1 {
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
interface CollectionWallet$1 extends AppObject$1 {
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
interface ClientTransaction$1 {
    fee: number;
    actualAmount: number;
}
interface MetaDataRate$1 {
    rateId: number;
    rate: number;
    sourceCurrency: string;
    destinationCurrency: string;
    convertedAmount: number;
}
interface MetaDataCredit$1 {
    sourceType: string;
    sourceData: SourceData$1;
    source: string;
    destination: string;
    destinationType: string;
    destinationData: DestinationData$1;
    amount: number;
    currency: string;
    actualAmount: number;
    fee: number;
    narration: string;
    balance: number;
}
interface MetaDataVerifyBeneficiary$1 {
    accountNumber: string;
    bankCode: string;
    bankName: string;
    accountName: string;
}
interface MetaDataVerifyData$1 {
    narration: string;
    amount: number;
    date: string;
    beneficiary: MetaDataVerifyBeneficiary$1;
    transactionStatus: string;
    sessionId: string;
    type: string;
}
interface MetaDataVerify$1 {
    status: string;
    data: {
        status: string;
        message: string;
        data: MetaDataVerifyData$1;
    };
}
interface MetaData$1 {
    isThirdParty: boolean;
    rate: MetaDataRate$1;
    credit: MetaDataCredit$1;
    verify: MetaDataVerify$1 | null;
}
interface DestinationData$1 {
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
interface SourceData$1 {
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
interface Rate {
    rateId: number;
    rate: number;
    sourceCurrency: string;
    destinationCurrency: string;
    convertedAmount: number;
}
interface Credit {
    sourceType: string;
    sourceData: SourceData$1;
    source: string;
    destination: string;
    destinationType: string;
    destinationData: DestinationData$1;
    amount: number;
    currency: string;
    actualAmount: number;
    fee: number;
    narration: string;
    balance: number;
}
interface Verify {
    status: string;
    data: VerifyData;
}
interface VerifyData {
    status: string;
    message: string;
    data: VerifyTransactionData;
}
interface VerifyTransactionData {
    narration: string;
    amount: number;
    date: string;
    beneficiary: Beneficiary;
    transactionStatus: string;
    sessionId: string;
    type: string;
}
interface Beneficiary {
    accountNumber: string;
    bankCode: string;
    bankName: string;
    accountName: string;
}
interface Transaction$1 extends AppObject$1 {
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
    destinationData: DestinationData$1;
    source: string;
    sourceType: string;
    sourceData: SourceData$1;
    amount: number;
    balance: number;
    clientTransaction: ClientTransaction$1;
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
    meta: MetaData$1;
    currencyPair: string | null;
    batchId: string | null;
    metadata: Record<string, any>;
}
interface Bank$1 extends AppObject$1 {
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
interface Balance$1 {
    withdrawableAmount: number;
    availableAmount: number;
}
interface FindAccountsResponse$1 {
    meta: Meta$1;
    data: Array<Account$1>;
}
interface UpdateAccountRequest$1 {
    webhooks?: Array<string>;
    live?: boolean;
}
interface UpdateAccountResponse$1 {
    meta: Meta$1;
    data: Account$1;
}
interface CreateWalletRequest$1 {
    accountName: string;
    category: string;
    currency: string;
    emailAddress?: string;
    mobile?: {
        phoneNumber: string;
        isoCode: string;
    };
}
interface CreateWalletResponse$1 {
    meta: Meta$1;
    data: Wallet$1;
}
interface CreateDisposableCollectionWalletRequest$1 {
    destination: string;
    accountName: string;
    amount: number;
    expireIn: number;
    reference?: string;
}
interface DisposableCollectionWalletResponse$1 {
    meta: Meta$1;
    data: CollectionWallet$1;
}
interface CreateTransitCollectionWalletRequest$1 {
    accountName: string;
    currency: string;
    settlementAccount: string;
    emailAddress?: string;
    mobile?: {
        phoneNumber: string;
        isoCode: string;
    };
}
interface TransitCollectionWalletResponse$1 {
    meta: Meta$1;
    data: CollectionWallet$1;
}
interface FindWalletsParams$1 {
    category?: string;
    isFavourite?: boolean;
    live?: boolean;
}
interface FindWalletsResponse$1 {
    meta: Meta$1;
    data: Array<Wallet$1>;
}
interface GetWalletResponse$1 {
    meta: Meta$1;
    data: Wallet$1;
}
interface GetBalanceResponse$1 {
    meta: Meta$1;
    data: Balance$1;
}
interface GetAllBalancesResponse$1 {
    meta: Meta$1;
    data: Record<string, any>;
}
interface CloseWalletResponse$1 {
    meta: Meta$1;
    data: {
        publicId: string;
        accountNumber: string;
    };
}
interface FindTransactionsParams$1 {
    entry?: 'debit' | 'credit';
    status?: 'pending' | 'processing' | 'success' | 'failed';
    amount?: number;
    live?: boolean;
    createdAt?: {
        startDate: string;
        endDate: string;
    };
}
interface FindTransactionsResponse$1 {
    meta: Meta$1;
    data: Array<Transaction$1>;
}
interface GetOneTransactionResponse$1 {
    meta: Meta$1;
    data: Transaction$1;
}
interface VerifyTransactionResponse$1 {
    meta: Meta$1;
    data: Transaction$1;
}
interface FindBanksResponse$1 {
    meta: Meta$1;
    data: Array<Bank$1>;
}
interface InitiateWalletTransferRequest$1 {
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
interface InitiateWalletTransferResponse$1 {
    meta: Meta$1;
    data: Transaction$1;
}
interface InitiateBankTransferRequest$1 {
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
interface InitiateBankTransferResponse$1 {
    meta: Meta$1;
    data: Transaction$1;
}
interface BankAccount$1 extends AppObject$1 {
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
interface FindBankAccountsParams$1 {
    accountName?: string;
    beneficiaryType?: string;
    live?: boolean;
}
interface FindBankAccountsResponse$1 {
    meta: Meta$1;
    data: Array<BankAccount$1>;
}
interface GetOneBankAccountResponse$1 {
    meta: Meta$1;
    data: BankAccount$1;
}
interface ValidateBankAccountRequest$1 {
    accountNumber: string;
    bankCode: string;
}
interface ValidateBankAccountResponse$1 {
    meta: Meta$1;
    data: BankAccount$1;
}
interface AddBankAccountRequest$1 {
    accountNumber: string;
    accountName: string;
    bankName: string;
    bankCode: string;
    beneficiaryType?: 'personal' | 'vba' | 'external';
}
interface AddBankAccountResponse$1 {
    meta: Meta$1;
    data: BankAccount$1;
}
interface GiroPaySDK$1 {
    findAccounts: (params?: FindAccountsParams$1) => Promise<FindAccountsResponse$1>;
    updateAccount: (accountId: string, payload: UpdateAccountRequest$1) => Promise<UpdateAccountResponse$1>;
    createWallet: (payload: CreateWalletRequest$1) => Promise<CreateWalletResponse$1>;
    findWallets: (params?: FindWalletsParams$1) => Promise<FindWalletsResponse$1>;
    createDisposableCollectionWallet: (payload: CreateDisposableCollectionWalletRequest$1) => Promise<DisposableCollectionWalletResponse$1>;
    createTransitCollectionWallet: (payload: CreateTransitCollectionWalletRequest$1) => Promise<TransitCollectionWalletResponse$1>;
    getOneWallet: (walletId: string) => Promise<GetWalletResponse$1>;
    getBalance: (walletId: string) => Promise<GetBalanceResponse$1>;
    getAllBalances: () => Promise<GetAllBalancesResponse$1>;
    closeWallet: (walletId: string) => Promise<CloseWalletResponse$1>;
    findTransactions: (params?: FindTransactionsParams$1) => Promise<FindTransactionsResponse$1>;
    getOneTransaction: (transactionId: string) => Promise<GetOneTransactionResponse$1>;
    verifyTransaction: (reference: string) => Promise<VerifyTransactionResponse$1>;
    findBanks: () => Promise<FindBanksResponse$1>;
    initiateWalletTransfer: (payload: InitiateWalletTransferRequest$1) => Promise<InitiateWalletTransferResponse$1>;
    initiateBankTransfer: (payload: InitiateBankTransferRequest$1) => Promise<InitiateBankTransferResponse$1>;
    findBankAccounts: (params?: FindBankAccountsParams$1) => Promise<FindBankAccountsResponse$1>;
    getOneBankAccount: (bankAccountId: string) => Promise<GetOneBankAccountResponse$1>;
    validateBankAccount: (payload: ValidateBankAccountRequest$1) => Promise<ValidateBankAccountResponse$1>;
    addBankAccount: (payload: AddBankAccountRequest$1) => Promise<AddBankAccountResponse$1>;
}

declare class GiroPaySDKError extends Error {
    statusCode?: number;
    responseError?: any;
    constructor(message: string, statusCode?: number, responseError?: any);
}

declare const baseURL = "https://gw.prod.girostack.com/v1";
declare enum Resources {
    Banks = "banks",
    Accounts = "accounts",
    VirtualAccount = "virtual-accounts",
    Transactions = "transactions",
    TransitCollections = "transit-accounts",
    DisposableCollections = "collection-accounts",
    BankAccounts = "bank-accounts"
}

interface AppObject {
    _id: string;
    __v?: number;
    id: string;
    publicId: string;
    createdAt?: string;
    updatedAt?: string;
    active?: boolean;
}
interface Meta {
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
interface Account extends AppObject {
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
interface FindAccountsParams {
    name?: string;
    isDefault?: boolean;
    live?: boolean;
}
interface Wallet extends AppObject {
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
interface CollectionWallet extends AppObject {
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
interface ClientTransaction {
    fee: number;
    actualAmount: number;
}
interface MetaDataRate {
    rateId: number;
    rate: number;
    sourceCurrency: string;
    destinationCurrency: string;
    convertedAmount: number;
}
interface MetaDataCredit {
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
interface MetaDataVerifyBeneficiary {
    accountNumber: string;
    bankCode: string;
    bankName: string;
    accountName: string;
}
interface MetaDataVerifyData {
    narration: string;
    amount: number;
    date: string;
    beneficiary: MetaDataVerifyBeneficiary;
    transactionStatus: string;
    sessionId: string;
    type: string;
}
interface MetaDataVerify {
    status: string;
    data: {
        status: string;
        message: string;
        data: MetaDataVerifyData;
    };
}
interface MetaData {
    isThirdParty: boolean;
    rate: MetaDataRate;
    credit: MetaDataCredit;
    verify: MetaDataVerify | null;
}
interface DestinationData {
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
interface SourceData {
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
interface Transaction extends AppObject {
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
interface Bank extends AppObject {
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
interface Balance {
    withdrawableAmount: number;
    availableAmount: number;
}
interface FindAccountsResponse {
    meta: Meta;
    data: Array<Account>;
}
interface UpdateAccountRequest {
    webhooks?: Array<string>;
    live?: boolean;
}
interface UpdateAccountResponse {
    meta: Meta;
    data: Account;
}
interface CreateWalletRequest {
    accountName: string;
    category: string;
    currency: string;
    emailAddress?: string;
    mobile?: {
        phoneNumber: string;
        isoCode: string;
    };
}
interface CreateWalletResponse {
    meta: Meta;
    data: Wallet;
}
interface CreateDisposableCollectionWalletRequest {
    destination: string;
    accountName: string;
    amount: number;
    expireIn: number;
    reference?: string;
}
interface DisposableCollectionWalletResponse {
    meta: Meta;
    data: CollectionWallet;
}
interface CreateTransitCollectionWalletRequest {
    accountName: string;
    currency: string;
    settlementAccount: string;
    emailAddress?: string;
    mobile?: {
        phoneNumber: string;
        isoCode: string;
    };
}
interface TransitCollectionWalletResponse {
    meta: Meta;
    data: CollectionWallet;
}
interface FindWalletsParams {
    category?: string;
    isFavourite?: boolean;
    live?: boolean;
}
interface FindWalletsResponse {
    meta: Meta;
    data: Array<Wallet>;
}
interface GetWalletResponse {
    meta: Meta;
    data: Wallet;
}
interface GetBalanceResponse {
    meta: Meta;
    data: Balance;
}
interface GetAllBalancesResponse {
    meta: Meta;
    data: Record<string, any>;
}
interface CloseWalletResponse {
    meta: Meta;
    data: {
        publicId: string;
        accountNumber: string;
    };
}
interface FindTransactionsParams {
    entry?: 'debit' | 'credit';
    status?: 'pending' | 'processing' | 'success' | 'failed';
    amount?: number;
    live?: boolean;
    createdAt?: {
        startDate: string;
        endDate: string;
    };
}
interface FindTransactionsResponse {
    meta: Meta;
    data: Array<Transaction>;
}
interface GetOneTransactionResponse {
    meta: Meta;
    data: Transaction;
}
interface VerifyTransactionResponse {
    meta: Meta;
    data: Transaction;
}
interface FindBanksResponse {
    meta: Meta;
    data: Array<Bank>;
}
interface InitiateWalletTransferRequest {
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
interface InitiateWalletTransferResponse {
    meta: Meta;
    data: Transaction;
}
interface InitiateBankTransferRequest {
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
interface InitiateBankTransferResponse {
    meta: Meta;
    data: Transaction;
}
interface BankAccount extends AppObject {
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
interface FindBankAccountsParams {
    accountName?: string;
    beneficiaryType?: string;
    live?: boolean;
}
interface FindBankAccountsResponse {
    meta: Meta;
    data: Array<BankAccount>;
}
interface GetOneBankAccountResponse {
    meta: Meta;
    data: BankAccount;
}
interface ValidateBankAccountRequest {
    accountNumber: string;
    bankCode: string;
}
interface ValidateBankAccountResponse {
    meta: Meta;
    data: BankAccount;
}
interface AddBankAccountRequest {
    accountNumber: string;
    accountName: string;
    bankName: string;
    bankCode: string;
    beneficiaryType?: 'personal' | 'vba' | 'external';
}
interface AddBankAccountResponse {
    meta: Meta;
    data: BankAccount;
}
interface GiroPaySDK {
    findAccounts: (params?: FindAccountsParams) => Promise<FindAccountsResponse>;
    updateAccount: (accountId: string, payload: UpdateAccountRequest) => Promise<UpdateAccountResponse>;
    createWallet: (payload: CreateWalletRequest) => Promise<CreateWalletResponse>;
    findWallets: (params?: FindWalletsParams) => Promise<FindWalletsResponse>;
    createDisposableCollectionWallet: (payload: CreateDisposableCollectionWalletRequest) => Promise<DisposableCollectionWalletResponse>;
    createTransitCollectionWallet: (payload: CreateTransitCollectionWalletRequest) => Promise<TransitCollectionWalletResponse>;
    getOneWallet: (walletId: string) => Promise<GetWalletResponse>;
    getBalance: (walletId: string) => Promise<GetBalanceResponse>;
    getAllBalances: () => Promise<GetAllBalancesResponse>;
    closeWallet: (walletId: string) => Promise<CloseWalletResponse>;
    findTransactions: (params?: FindTransactionsParams) => Promise<FindTransactionsResponse>;
    getOneTransaction: (transactionId: string) => Promise<GetOneTransactionResponse>;
    verifyTransaction: (reference: string) => Promise<VerifyTransactionResponse>;
    findBanks: () => Promise<FindBanksResponse>;
    initiateWalletTransfer: (payload: InitiateWalletTransferRequest) => Promise<InitiateWalletTransferResponse>;
    initiateBankTransfer: (payload: InitiateBankTransferRequest) => Promise<InitiateBankTransferResponse>;
    findBankAccounts: (params?: FindBankAccountsParams) => Promise<FindBankAccountsResponse>;
    getOneBankAccount: (bankAccountId: string) => Promise<GetOneBankAccountResponse>;
    validateBankAccount: (payload: ValidateBankAccountRequest) => Promise<ValidateBankAccountResponse>;
    addBankAccount: (payload: AddBankAccountRequest) => Promise<AddBankAccountResponse>;
}

declare function initializeGiroPaySDK(apiKey: string): GiroPaySDK;

export { type Account$1 as Account, type AddBankAccountRequest$1 as AddBankAccountRequest, type AddBankAccountResponse$1 as AddBankAccountResponse, type AppObject$1 as AppObject, type Balance$1 as Balance, type Bank$1 as Bank, type BankAccount$1 as BankAccount, type Beneficiary, type ClientTransaction$1 as ClientTransaction, type CloseWalletResponse$1 as CloseWalletResponse, type CollectionWallet$1 as CollectionWallet, type CreateDisposableCollectionWalletRequest$1 as CreateDisposableCollectionWalletRequest, type CreateTransitCollectionWalletRequest$1 as CreateTransitCollectionWalletRequest, type CreateWalletRequest$1 as CreateWalletRequest, type CreateWalletResponse$1 as CreateWalletResponse, type Credit, type DestinationData$1 as DestinationData, type DisposableCollectionWalletResponse$1 as DisposableCollectionWalletResponse, type FindAccountsParams$1 as FindAccountsParams, type FindAccountsResponse$1 as FindAccountsResponse, type FindBankAccountsParams$1 as FindBankAccountsParams, type FindBankAccountsResponse$1 as FindBankAccountsResponse, type FindBanksResponse$1 as FindBanksResponse, type FindTransactionsParams$1 as FindTransactionsParams, type FindTransactionsResponse$1 as FindTransactionsResponse, type FindWalletsParams$1 as FindWalletsParams, type FindWalletsResponse$1 as FindWalletsResponse, type GetAllBalancesResponse$1 as GetAllBalancesResponse, type GetBalanceResponse$1 as GetBalanceResponse, type GetOneBankAccountResponse$1 as GetOneBankAccountResponse, type GetOneTransactionResponse$1 as GetOneTransactionResponse, type GetWalletResponse$1 as GetWalletResponse, type GiroPaySDK$1 as GiroPaySDK, GiroPaySDKError, type InitiateBankTransferRequest$1 as InitiateBankTransferRequest, type InitiateBankTransferResponse$1 as InitiateBankTransferResponse, type InitiateWalletTransferRequest$1 as InitiateWalletTransferRequest, type InitiateWalletTransferResponse$1 as InitiateWalletTransferResponse, type Meta$1 as Meta, type MetaData$1 as MetaData, type MetaDataCredit$1 as MetaDataCredit, type MetaDataRate$1 as MetaDataRate, type MetaDataVerify$1 as MetaDataVerify, type MetaDataVerifyBeneficiary$1 as MetaDataVerifyBeneficiary, type MetaDataVerifyData$1 as MetaDataVerifyData, type Rate, Resources, type SourceData$1 as SourceData, type Transaction$1 as Transaction, type TransitCollectionWalletResponse$1 as TransitCollectionWalletResponse, type UpdateAccountRequest$1 as UpdateAccountRequest, type UpdateAccountResponse$1 as UpdateAccountResponse, type ValidateBankAccountRequest$1 as ValidateBankAccountRequest, type ValidateBankAccountResponse$1 as ValidateBankAccountResponse, type Verify, type VerifyData, type VerifyTransactionData, type VerifyTransactionResponse$1 as VerifyTransactionResponse, type Wallet$1 as Wallet, baseURL, initializeGiroPaySDK };
