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


  constructor(
    public router: Router,
  ) {
  }

  onTorchCompatible(event: boolean) {
    if (!this.torchCompatible) {
      console.log('onTorchCompatible');
      console.log(event);
      this.torchCompatible = event;
      console.log(this.torchCompatible)
    }
  }

  camerasFoundHandler(event: MediaDeviceInfo[]) {
    console.log('camerasFoundHandler');
    console.log(event);
  }

  camerasNotFoundHandler(event: any) {
    console.log('camerasNotFoundHandler');
    console.log(event);
  }

  scanSuccessHandler(event: string) {
    console.log('scanSuccessHandler');
    console.log(event);
  }

  scanErrorHandler(event: Error) {
    console.log('scanErrorHandler');
    console.log(event);
  }

  scanFailureHandler(event: Exception) {
    console.log('scanFailureHandler');
    console.log(event);
  }

  scanCompleteHandler(event: Result) {
    if (event && event.getText() !== this.resultText) {
      this.resultText = event.getText();
      this.scannerEnabled = false;
    }
  }
}
