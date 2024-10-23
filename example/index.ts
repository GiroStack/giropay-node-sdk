import { GiroPaySDKError } from '../lib/error';
import { initializeGiroPaySDK } from '../lib/factory';

// Replace 'your-api-key' with an actual API key
const sdk = initializeGiroPaySDK(
  'test_sec_e7ba857eb6573900fd0cad89f-1d17-4df2-896a-61bid16f4702',
);

async function runExample() {
  try {
    await sdk.findAccounts();
    await sdk.updateAccount('acc-2cbc8u27-e7b5-43f6-a5d1-36de0fauh6f436', {
      live: true,
    });
    await sdk.createTransitCollectionWallet({
      accountName: 'giropay apk collection',
      settlementAccount: 'vba-0996270f-d0fd-442a-bcfc-86195ab57f35',
      currency: 'NGN',
    });
    await sdk.verifyTransaction(
      'TRF-595812517812603t456060145475uu044533175799-1729626652843',
    );
  } catch (error) {
    if (error instanceof GiroPaySDKError) {
      console.error('Error:', error.message);
      if (error.statusCode) {
        console.error('Status code:', error.statusCode);
      }
      if (error.responseError) {
        console.error('Response data:', error.responseError);
      }
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

runExample();
