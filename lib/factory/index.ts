import axios, { AxiosInstance, AxiosError } from 'axios';
import { Resources, baseURL } from '../constants';
import { GiroPaySDKError } from '../error';
import {
  FindAccountsResponse,
  UpdateAccountResponse,
  UpdateAccountRequest,
  GiroPaySDK,
  FindWalletsResponse,
  GetWalletResponse,
  GetBalanceResponse,
  GetAllBalancesResponse,
  CreateWalletRequest,
  CreateWalletResponse,
  CreateDisposableCollectionWalletRequest,
  CreateTransitCollectionWalletRequest,
  DisposableCollectionWalletResponse,
  TransitCollectionWalletResponse,
  CloseWalletResponse,
  FindTransactionsResponse,
  GetOneTransactionResponse,
  VerifyTransactionResponse,
  FindBanksResponse,
  InitiateWalletTransferResponse,
  InitiateWalletTransferRequest,
  InitiateBankTransferRequest,
  InitiateBankTransferResponse,
  FindTransactionsParams,
  FindBankAccountsParams,
  FindBankAccountsResponse,
  GetOneBankAccountResponse,
  FindAccountsParams,
  ValidateBankAccountRequest,
  ValidateBankAccountResponse,
  AddBankAccountRequest,
  AddBankAccountResponse,
  FindWalletsParams,
} from './types';

export class GiroPay {
  private api: AxiosInstance;

  constructor(apiKey: string) {
    if (!apiKey || typeof apiKey !== 'string' || apiKey.trim() === '') {
      throw new GiroPaySDKError(
        'Invalid API key: API key must be a non-empty string',
      );
    }

    this.api = axios.create({
      baseURL,
      headers: {
        'x-giro-key': apiKey,
        'Content-Type': 'application/json',
      },
    });
  }

  private handleApiError(error: AxiosError): never {
    if (error.response) {
      throw new GiroPaySDKError(
        `API Error: ${error.response.status} - ${error.response.statusText}`,
        error.response.status,
        error.response.data,
      );
    } else if (error.request) {
      throw new GiroPaySDKError('No response received from the server');
    } else {
      throw new GiroPaySDKError(
        `Error setting up the request: ${error.message}`,
      );
    }
  }

  async findAccounts(
    params?: FindAccountsParams,
  ): Promise<FindAccountsResponse> {
    try {
      const response = await this.api.get(`/${Resources.Accounts}`, {
        params: params || {},
      });
      console.log('findAccounts::', response.data);
      return response.data;
    } catch (error) {
      this.handleApiError(error as AxiosError);
    }
  }

  async updateAccount(
    accountId: string,
    payload: UpdateAccountRequest,
  ): Promise<UpdateAccountResponse> {
    try {
      const response = await this.api.patch(
        `/${Resources.Accounts}/${accountId}`,
        payload,
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error as AxiosError);
    }
  }

  async createWallet(
    payload: CreateWalletRequest,
  ): Promise<CreateWalletResponse> {
    try {
      const response = await this.api.post(
        `/${Resources.VirtualAccount}`,
        payload,
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error as AxiosError);
    }
  }
  async getOneWallet(walletId: string): Promise<GetWalletResponse> {
    try {
      const response = await this.api.get(
        `/${Resources.VirtualAccount}/${walletId}`,
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error as AxiosError);
    }
  }

  async findWallets(params?: FindWalletsParams): Promise<FindWalletsResponse> {
    try {
      const response = await this.api.get(`/${Resources.VirtualAccount}`, {
        params: params || {},
      });
      console.log('findWallets::', response.data);
      return response.data;
    } catch (error) {
      this.handleApiError(error as AxiosError);
    }
  }

  async getBalance(walletId: string): Promise<GetBalanceResponse> {
    try {
      const response = await this.api.get(
        `/${Resources.VirtualAccount}/${walletId}/balance`,
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error as AxiosError);
    }
  }

  async getAllBalances(): Promise<GetAllBalancesResponse> {
    try {
      const response = await this.api.get(
        `/${Resources.VirtualAccount}/balance/all`,
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error as AxiosError);
    }
  }

  async createDisposableCollectionWallet(
    payload: CreateDisposableCollectionWalletRequest,
  ): Promise<DisposableCollectionWalletResponse> {
    try {
      const response = await this.api.post(
        `/${Resources.DisposableCollections}`,
        payload,
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error as AxiosError);
    }
  }

  async createTransitCollectionWallet(
    payload: CreateTransitCollectionWalletRequest,
  ): Promise<TransitCollectionWalletResponse> {
    try {
      const response = await this.api.post(
        `/${Resources.TransitCollections}`,
        payload,
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error as AxiosError);
    }
  }

  async closeWallet(walletId: string): Promise<CloseWalletResponse> {
    try {
      const response = await this.api.delete(
        `/${Resources.VirtualAccount}/${walletId}`,
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error as AxiosError);
    }
  }

  async findTransactions(
    params?: FindTransactionsParams,
  ): Promise<FindTransactionsResponse> {
    try {
      const response = await this.api.get(`/${Resources.Transactions}`, {
        params: params || {},
      });
      return response.data;
    } catch (error) {
      this.handleApiError(error as AxiosError);
    }
  }

  async getOneTransaction(
    transactionId: string,
  ): Promise<GetOneTransactionResponse> {
    try {
      const response = await this.api.get(
        `/${Resources.Transactions}/${transactionId}`,
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error as AxiosError);
    }
  }

  async verifyTransaction(
    transactionId: string,
  ): Promise<VerifyTransactionResponse> {
    try {
      const response = await this.api.get(
        `/${Resources.Transactions}/${transactionId}/verify`,
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error as AxiosError);
    }
  }

  async findBanks(): Promise<FindBanksResponse> {
    try {
      const response = await this.api.get(
        `/${Resources.Transactions}/${Resources.Banks}`,
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error as AxiosError);
    }
  }

  async initiateWalletTransfer(
    payload: InitiateWalletTransferRequest,
  ): Promise<InitiateWalletTransferResponse> {
    try {
      const response = await this.api.post(
        `/${Resources.Transactions}/transfer`,
        payload,
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error as AxiosError);
    }
  }

  async initiateBankTransfer(
    payload: InitiateBankTransferRequest,
  ): Promise<InitiateBankTransferResponse> {
    try {
      const response = await this.api.post(
        `/${Resources.Transactions}/bank-transfer`,
        payload,
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error as AxiosError);
    }
  }

  async findBankAccounts(
    params?: FindBankAccountsParams,
  ): Promise<FindBankAccountsResponse> {
    try {
      const response = await this.api.get(`/${Resources.BankAccounts}`, {
        params: params || {},
      });
      return response.data;
    } catch (error) {
      this.handleApiError(error as AxiosError);
    }
  }

  async getOneBankAccount(
    bankAccountId: string,
  ): Promise<GetOneBankAccountResponse> {
    try {
      const response = await this.api.get(
        `/${Resources.BankAccounts}/${bankAccountId}`,
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error as AxiosError);
    }
  }

  async validateBankAccount(
    payload: ValidateBankAccountRequest,
  ): Promise<ValidateBankAccountResponse> {
    try {
      const response = await this.api.post(
        `/${Resources.Transactions}/validate-account`,
        payload,
      );
      console.log('validateBankAccount::', response.data);
      return response.data;
    } catch (error) {
      this.handleApiError(error as AxiosError);
    }
  }

  async addBankAccount(
    payload: AddBankAccountRequest,
  ): Promise<AddBankAccountResponse> {
    try {
      const response = await this.api.post(
        `/${Resources.BankAccounts}`,
        payload,
      );
      console.log('addBankAccount::', response.data);
      return response.data;
    } catch (error) {
      this.handleApiError(error as AxiosError);
    }
  }
}

export function initializeGiroPaySDK(apiKey: string): GiroPaySDK {
  if (!(this instanceof GiroPay)) {
    return new GiroPay(apiKey);
  }
}
