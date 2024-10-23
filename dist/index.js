// lib/error/index.ts
var GiroPaySDKError = class extends Error {
  constructor(message, statusCode, responseError) {
    super(message);
    this.statusCode = statusCode;
    this.responseError = responseError;
    this.name = "GiroPaySDKError";
  }
};

// lib/constants/index.ts
var baseURL = "https://gw.prod.girostack.com/v1";
var Resources = /* @__PURE__ */ ((Resources2) => {
  Resources2["Banks"] = "banks";
  Resources2["Accounts"] = "accounts";
  Resources2["VirtualAccount"] = "virtual-accounts";
  Resources2["Transactions"] = "transactions";
  Resources2["TransitCollections"] = "transit-accounts";
  Resources2["DisposableCollections"] = "collection-accounts";
  Resources2["BankAccounts"] = "bank-accounts";
  return Resources2;
})(Resources || {});

// lib/factory/index.ts
import axios from "axios";
var GiroPay = class {
  constructor(apiKey) {
    if (!apiKey || typeof apiKey !== "string" || apiKey.trim() === "") {
      throw new GiroPaySDKError(
        "Invalid API key: API key must be a non-empty string"
      );
    }
    this.api = axios.create({
      baseURL,
      headers: {
        "x-giro-key": apiKey,
        "Content-Type": "application/json"
      }
    });
  }
  handleApiError(error) {
    if (error.response) {
      throw new GiroPaySDKError(
        `API Error: ${error.response.status} - ${error.response.statusText}`,
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      throw new GiroPaySDKError("No response received from the server");
    } else {
      throw new GiroPaySDKError(
        `Error setting up the request: ${error.message}`
      );
    }
  }
  async findAccounts(params) {
    try {
      const response = await this.api.get(`/${"accounts" /* Accounts */}`, {
        params: params || {}
      });
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async updateAccount(accountId, payload) {
    try {
      const response = await this.api.patch(
        `/${"accounts" /* Accounts */}/${accountId}`,
        payload
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async createWallet(payload) {
    try {
      const response = await this.api.post(
        `/${"virtual-accounts" /* VirtualAccount */}`,
        payload
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async getOneWallet(walletId) {
    try {
      const response = await this.api.get(
        `/${"virtual-accounts" /* VirtualAccount */}/${walletId}`
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async findWallets(params) {
    try {
      const response = await this.api.get(`/${"virtual-accounts" /* VirtualAccount */}`, {
        params: params || {}
      });
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async getBalance(walletId) {
    try {
      const response = await this.api.get(
        `/${"virtual-accounts" /* VirtualAccount */}/${walletId}/balance`
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async getAllBalances() {
    try {
      const response = await this.api.get(
        `/${"virtual-accounts" /* VirtualAccount */}/balance/all`
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async createDisposableCollectionWallet(payload) {
    try {
      const response = await this.api.post(
        `/${"collection-accounts" /* DisposableCollections */}`,
        payload
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async createTransitCollectionWallet(payload) {
    try {
      const response = await this.api.post(
        `/${"transit-accounts" /* TransitCollections */}`,
        payload
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async closeWallet(walletId) {
    try {
      const response = await this.api.delete(
        `/${"virtual-accounts" /* VirtualAccount */}/${walletId}`
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async findTransactions(params) {
    try {
      const response = await this.api.get(`/${"transactions" /* Transactions */}`, {
        params: params || {}
      });
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async getOneTransaction(transactionId) {
    try {
      const response = await this.api.get(
        `/${"transactions" /* Transactions */}/${transactionId}`
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async verifyTransaction(transactionId) {
    try {
      const response = await this.api.get(
        `/${"transactions" /* Transactions */}/${transactionId}/verify`
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async findBanks() {
    try {
      const response = await this.api.get(
        `/${"transactions" /* Transactions */}/${"banks" /* Banks */}`
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async initiateWalletTransfer(payload) {
    try {
      const response = await this.api.post(
        `/${"transactions" /* Transactions */}/transfer`,
        payload
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async initiateBankTransfer(payload) {
    try {
      const response = await this.api.post(
        `/${"transactions" /* Transactions */}/bank-transfer`,
        payload
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async findBankAccounts(params) {
    try {
      const response = await this.api.get(`/${"bank-accounts" /* BankAccounts */}`, {
        params: params || {}
      });
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async getOneBankAccount(bankAccountId) {
    try {
      const response = await this.api.get(
        `/${"bank-accounts" /* BankAccounts */}/${bankAccountId}`
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async validateBankAccount(payload) {
    try {
      const response = await this.api.post(
        `/${"transactions" /* Transactions */}/validate-account`,
        payload
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async addBankAccount(payload) {
    try {
      const response = await this.api.post(
        `/${"bank-accounts" /* BankAccounts */}`,
        payload
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
};
function initializeGiroPaySDK(apiKey) {
  if (!(this instanceof GiroPay)) {
    return new GiroPay(apiKey);
  }
}
export {
  GiroPaySDKError,
  Resources,
  baseURL,
  initializeGiroPaySDK
};
ansactions */}/transfer`,
        payload
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async initiateBankTransfer(payload) {
    try {
      const response = await this.api.post(
        `/${"transactions" /* Transactions */}/bank-transfer`,
        payload
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async findBankAccounts(params) {
    try {
      const response = await this.api.get(`/${"bank-accounts" /* BankAccounts */}`, {
        params: params || {}
      });
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async getOneBankAccount(bankAccountId) {
    try {
      const response = await this.api.get(
        `/${"bank-accounts" /* BankAccounts */}/${bankAccountId}`
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async validateBankAccount(payload) {
    try {
      const response = await this.api.post(
        `/${"transactions" /* Transactions */}/validate-account`,
        payload
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
  async addBankAccount(payload) {
    try {
      const response = await this.api.post(
        `/${"bank-accounts" /* BankAccounts */}`,
        payload
      );
      return response.data;
    } catch (error) {
      this.handleApiError(error);
    }
  }
};
function initializeGiroPaySDK(apiKey) {
  if (!(this instanceof GiroPay)) {
    return new GiroPay(apiKey);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GiroPaySDKError,
  Resources,
  baseURL,
  initializeGiroPaySDK
});
