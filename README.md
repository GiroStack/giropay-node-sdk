## Giro Node.js SDK

Giro SDK is a comprehensive Node.js SDK designed to simplify the integration with Giro’s powerful API. It provides developers with an easy-to-use interface for accessing core Giro services, such as initiating transactions, retrieving account balances, and more.

### Installation

To install the Giro SDK, run:

```bash
npm install @giropay/node-sdk
# or
yarn add @giropay/node-sdk
```

### Initialization

The SDK must be initialized using your API secret key. This key is used for authorization.

```javascript
import { initializeGiroPaySDK } from '@giropay/node-sdk';

// Replace 'your-secret-key' with an actual API secret key
const sdk = initializeGiroPaySDK('your-secret-key');
```

### Methods

### 1. findAccounts

Fetches all accounts associated with the API key.

| Parameter     | Type    | Required | Description                       |
| ------------- | ------- | -------- | --------------------------------- |
| **name**      | string  | No       | Filter accounts by name           |
| **isDefault** | boolean | No       | Filter accounts marked as default |
| **live**      | boolean | No       | Filter accounts that are live     |

> The parameters when provided, should be passed inside a configuration object. If no configuration is required, the object can be omitted entirely.

##### Returns: `Promise<FindAccountsResponse>`

### 2. updateAccount

Updates the details of a specific account.

| Parameter            | Type    | Required | Description                                                                   |
| -------------------- | ------- | -------- | ----------------------------------------------------------------------------- |
| **accountId**        | string  | Yes      | The **publicId** of the account to update                                     |
| **payload**          | object  | Yes      | The account details to update                                                 |
| ** payload.live**    | boolean | No       | Set to update account mode                                                    |
| **payload.webhooks** | array   | No       | Value should contain the webhook url(s). This should be an array of string(s) |

##### Returns: `Promise<UpdateAccountResponse>`

### 3. createWallet

Creates a new wallet.

| Parameter               | Type   | Required | Description                                                         |
| ----------------------- | ------ | -------- | ------------------------------------------------------------------- |
| **accountName**         | string | Yes      | The name of the new wallet                                          |
| **category**            | string | Yes      | The wallet category (e.g., **primary** or **secondary**)            |
| **currency**            | string | Yes      | The currency for the new wallet. Value should be **NGN**            |
| **emailAddress**        | string | No       | This should be provided only when wallet category is **secondary**  |
| **mobile**              | object | No       | This should be provided only when wallet category is **secondary**. |
| **mobile.phoneNumber ** | string | Yes      | The mobile number of the customer                                   |
| ** mobile.isoCode**     | string | Yes      | Value should be **NG**                                              |

> The parameters should be passed inside a configuration object.

##### Returns: `Promise<CreateWalletResponse>`

### 4. findWallets

Fetches wallets based on filters.

| Parameter       | Type    | Required | Description                                                              |
| --------------- | ------- | -------- | ------------------------------------------------------------------------ |
| **category**    | string  | No       | The wallet category (e.g., **primary**)                                  |
| **live**        | boolean | No       | Filter wallets that are live                                             |
| **isFavourite** | boolean | No       | Filter favourite wallets. By default, these are your **primary** wallets |

> The parameters when provided, should be passed inside a configuration object. If no configuration is required, the object can be omitted entirely.

##### Returns: `Promise<FindWalletsResponse>`

### 5. getOneWallet

Fetches details of a specific wallet by its ID.

| Parameter    | Type   | Required | Description                                |
| ------------ | ------ | -------- | ------------------------------------------ |
| **walletId** | string | Yes      | The **publicId** of the wallet to retrieve |

##### Returns: `Promise<GetWalletResponse>`

### 6. getAllBalances

Fetches balances of all wallets associated with the API key.

##### Parameters: None

##### Returns: `Promise<GetAllBalancesResponse>`

### 7. getBalance

Fetches the balance of a specific wallet by its ID.

| Parameter    | Type   | Required | Description                              |
| ------------ | ------ | -------- | ---------------------------------------- |
| **walletId** | string | Yes      | The `publicId` of the wallet to retrieve |

##### Returns: `Promise<GetBalanceResponse>`

### 8. createDisposableCollectionWallet

Creates a disposable collection wallet.

| Parameter       | Type   | Required | Description                                                                                           |
| --------------- | ------ | -------- | ----------------------------------------------------------------------------------------------------- |
| **accountName** | string | Yes      | The name of the collection wallet                                                                     |
| **destination** | string | Yes      | The value should be the **publicId** of the wallet where you want incoming transactions to be settled |
| **amount**      | number | Yes      | The amount for the collection. Value should be in kobo                                                |
| **expireIn**    | number | Yes      | Range is **10 mins** - **30mins**. Value should be in seconds.                                        |
| **reference**   | string | No       | When provided, this should be unique and minimum length should be 5.                                  |

> The parameters should be passed inside a configuration object.

##### Returns: `Promise<DisposableCollectionWalletResponse>`

### 9. createTransitCollectionWallet

Creates a new transit collection wallet.

| Parameter              | Type   | Required | Description                                                                                           |
| ---------------------- | ------ | -------- | ----------------------------------------------------------------------------------------------------- |
| **accountName**        | string | Yes      | The name of the collection wallet                                                                     |
| **settlementAccount**  | string | Yes      | The value should be the **publicId** of the wallet where you want incoming transactions to be settled |
| **currency**           | string | Yes      | The currency for the new wallet. Value should be **NGN**                                              |
| **emailAddress**       | string | No       | The value should be a valid email address                                                             |
| **mobile**             | object | No       | The value should be a valid mobile number                                                             |
| **mobile.phoneNumber** | string | Yes      |                                                                                                       |
| **mobile.isoCode**     | string | Yes      | Value should be **NG**                                                                                |

> The parameters should be passed inside a configuration object.

##### Returns: `Promise<TransitCollectionWalletResponse>`

### 10. closeWallet

Closes a wallet by its ID.

| Parameter    | Type   | Required | Description                             |
| ------------ | ------ | -------- | --------------------------------------- |
| **walletId** | string | Yes      | The **publicId** of the wallet to close |

##### Returns: `Promise<CloseWalletResponse>`

### 11. findTransactions

Fetches transactions based on filters.

| Parameter     | Type    | Required | Description                                                                                                                                                  |
| ------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **entry**     | string  | No       | Filter transactions by entry type (e.g., credit)                                                                                                             |
| **live**      | boolean | No       | Filter transactions that are live                                                                                                                            |
| **status**    | string  | No       | Filter transactions by status (e.g., success)                                                                                                                |
| **amount**    | number  | No       | Filter transactions by amount. Value should be in kobo                                                                                                       |
| **createdAt** | object  | No       | Filter transactions by date-range. Value should be an object containing a date string in this format: `{"startDate": "2024-01-01", "endDate": "2024-03-30"}` |

> The parameters when provided, should be passed inside a configuration object. If no configuration is required, the object can be omitted entirely.

##### Returns: `Promise<FindTransactionsResponse>`

### 12. getOneTransaction

Fetches details of a specific transaction by its ID.

| Parameter         | Type   | Required | Description                                     |
| ----------------- | ------ | -------- | ----------------------------------------------- |
| **transactionId** | string | Yes      | The **publicId** of the transaction to retrieve |

##### Returns: `Promise<GetOneTransactionResponse>`

### 13. findBanks

Fetches a list of supported banks.

##### Parameters: None

#### Returns: `Promise<FindBanksResponse>`

### 14. initiateWalletTransfer

Initiates a transfer between own wallets.

| Parameter           | Type   | Required | Description                                                                    |
| ------------------- | ------ | -------- | ------------------------------------------------------------------------------ | --- |
| **source**          | string | Yes      | The source wallet **publicId**                                                 |
| **sourceType**      | string | Yes      | The type of source (e.g., VirtualAccount)                                      |
| **destination**     | string | Yes      | The destination wallet **publicId**                                            |
| **destinationType** | string | Yes      | The type of destination (e.g., VirtualAccount)                                 |
| **currency**        | string | Yes      | The currency for the transfer. Value should be **NGN**                         |
| **amount**          | number | Yes      | The amount to transfer. Value should be in kobo. Minimum transfer is 100 naira |
| **narration**       | string | Yes      | The narration for the transfer                                                 |
| **reference**       | string | No       |                                                                                |
| **nameEnquiryRef**  | string | No       |                                                                                |     |

> The parameters should be passed inside a configuration object.

##### Returns: `Promise<InitiateWalletTransferResponse>`

### 15. initiateBankTransfer

Initiates a transfer to a bank account.

| Parameter           | Type    | Required | Description                                                                    |
| ------------------- | ------- | -------- | ------------------------------------------------------------------------------ | --- |
| **source**          | string  | Yes      | The source wallet **publicId**                                                 |
| **accountNumber**   | string  | Yes      | The destination bank account number                                            |
| **bankCode**        | string  | Yes      | The bank code of the destination bank                                          |
| **currency**        | string  | Yes      | The currency for the transfer. Value should be **NGN**                         |
| **amount**          | number  | Yes      | The amount to transfer. Value should be in kobo. Minimum transfer is 100 naira |
| **narration**       | string  | Yes      | The narration for the transfer                                                 |
| **reference**       | string  | No       |                                                                                |
| **saveBeneficiary** | boolean | No       |                                                                                |
| **metadata**        | object  | No       |                                                                                |     |

> The parameters should be passed inside a configuration object.

##### Returns: `Promise<InitiateBankTransferResponse>`

### 16. verifyTransaction

Verifies a transaction by its reference.

| Parameter     | Type   | Required | Description                                    |
| ------------- | ------ | -------- | ---------------------------------------------- |
| **reference** | string | Yes      | The **reference** of the transaction to verify |

##### Returns: `Promise<VerifyTransactionResponse>`

### 17. findBankAccounts

Fetches bank accounts based on filters.

| Parameter           | Type    | Required | Description                              |
| ------------------- | ------- | -------- | ---------------------------------------- |
| **beneficiaryType** | string  | No       | The type of beneficiary (e.g., personal) |
| **accountName**     | string  | No       | Filter by account name                   |
| **live**            | boolean | No       | Filter bank accounts that are live       |

> The parameters when provided, should be passed inside a configuration object. If no configuration is required, the object can be omitted entirely.

##### Returns: `Promise<FindBankAccountsResponse>`

### 18. getOneBankAccount

Fetches details of a specific bank account by its ID.

| Parameter         | Type   | Required | Description                                      |
| ----------------- | ------ | -------- | ------------------------------------------------ |
| **bankAccountId** | string | Yes      | The **publicId** of the bank account to retrieve |

##### Returns: `Promise<GetOneBankAccountResponse>`

### 19. validateBankAccount

Validates a bank account.

| Parameter         | Type   | Required | Description                    |
| ----------------- | ------ | -------- | ------------------------------ |
| **bankCode**      | string | Yes      | The bank code of the bank      |
| **accountNumber** | string | Yes      | The account number to validate |

> The parameters should be passed inside a configuration object.

##### Returns: `Promise<ValidateBankAccountResponse>`

### 20. addBankAccount

Adds a new bank account.

| Parameter           | Type   | Required | Description                                                                                    |
| ------------------- | ------ | -------- | ---------------------------------------------------------------------------------------------- |
| **accountName**     | string | Yes      | The name of the bank account holder                                                            |
| **accountNumber**   | string | Yes      | The bank account number                                                                        |
| **bankCode**        | string | Yes      | The bank code of the bank                                                                      |
| **bankName**        | string | Yes      | The name of the bank                                                                           |
| **beneficiaryType** | string | No       | The beneficiary type. Value should be 'personal', 'vba', or'external'. Default is **personal** |

> The parameters should be passed inside a configuration object.

##### Returns: `Promise<AddBankAccountResponse>`

---

## Example

Here is an example of how to use the **initiateWalletTransfer** method:

```javascript
await sdk.initiateWalletTransfer({
  source: 'vba-cafdd935-9e82-4e2c-85fdd-d1ff1f43c5b53',
  sourceType: 'VirtualAccount',
  destination: 'vba-5d44d6d1-e2ed-4f83-9704-d956td50eb792',
  destinationType: 'VirtualAccount',
  currency: 'NGN',
  amount: 55000,
  narration: 'giro sdk wallet transfer',
});
```

In this example, we initiated a transfer of NGN550 from one wallet to another.

---

> For further reference, please refer to the [Giro Documentation](https://docs.girostack.com).
