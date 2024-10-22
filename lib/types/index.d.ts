export declare interface useSnapChatConnectionReturnType {
    snapchatData: Record<string, any> | null;
    isLoading: boolean;
    onSnapChatConnect: () => void;
};

export declare interface FintechSDK {
    
    getAccountBalance: (accountId: string) => Promise<number>;
    transferMoney: (fromAccountId: string, toAccountId: string, amount: number) => Promise<boolean>;
    getTransactionHistory: (accountId: string, startDate: Date, endDate: Date) => Promise<any[]>;
    createAccount: (userId: string, accountType: 'checking' | 'savings') => Promise<string>;
  }