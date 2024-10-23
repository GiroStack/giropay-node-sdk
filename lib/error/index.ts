export class GiroPaySDKError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public responseError?: any,
  ) {
    super(message);
    this.name = 'GiroPaySDKError';
  }
}
