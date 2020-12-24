import {Component, ViewChild} from '@angular/core';
import {BarcodeFormat, Exception, Result} from '@zxing/library';
import {Router} from '@angular/router';
import {ZXingScannerComponent} from '@zxing/ngx-scanner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qrcodeReader';
  allowedFormats = [BarcodeFormat.QR_CODE];
  scannerEnabled = false;
  desiredDevice: any;
  torch: any;
  @ViewChild('scanner', { static: false })
  scanner: ZXingScannerComponent;
  resultText: string;
  torchCompatible: Boolean;
  cameraList: MediaDeviceInfo[];


  constructor() {
  }

  scanCompleteHandler(event: Result) {
    if (event && event.getText() !== this.resultText) {
      this.resultText = event.getText();
      this.scannerEnabled = false;
    }
  }
}
