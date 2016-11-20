interface NSMetadata {
  appVersion: number;
  build: number;
}

interface MSApplicationMetadata {
  metadata(): NSMetadata;
}

export default class App {
  apiVersion = "1.1";
  version: number;
  buildNumber: number;
  document;

  constructor() {
    // const metadata = MSApplicationMetadata.metadata();
    // this.version = metadata.appVersion;
    // this.buildNumber = metadata.build;
    // this.document = NSDocumentController.sharedDocumentController().currentDocument();
  }

  get fullVersion() {
    return this.version + " (" + this.buildNumber + ")";
  }
}
