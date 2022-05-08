export declare global {
  interface Window {
    dataLayer?: DataLayer.EventParameters[];
  }
}

declare namespace DataLayer {
  interface EventParameters {
    [key: string]: any;
  }
}
