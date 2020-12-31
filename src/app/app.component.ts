import {Component, ViewChild} from '@angular/core';
import {BarcodeFormat, Exception, Result} from '@zxing/library';
import {ZXingScannerComponent} from '@zxing/ngx-scanner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qrcodeReader';
  allowedFormats = [BarcodeFormat.QR_CODE];
  desiredDevice: any;
  torch: any;
  @ViewChild('scanner', { static: false })
  scanner: ZXingScannerComponent;
  resultText: string;
  torchCompatible: Boolean;
  cameraList: MediaDeviceInfo[];
  cameras = [];


  constructor() {
  }

  scanCompleteHandler(event: Result) {
    if (event && event.getText() !== this.resultText) {
      this.resultText = event.getText();
    }
  }

  onTorchCompatible(event: boolean) {
    console.log('torchCompatible : ' + event);
    if (event) {
      this.torchCompatible = true;
    }
  }

  camerasFoundHandler(cameras: MediaDeviceInfo[]) {
    console.table(cameras);
    if (cameras) {
      this.cameras = cameras;
    }
  }

  onChange(event) {
    console.log(event);
    this.desiredDevice = this.cameras.find(camera => camera.deviceId === event)
  }
}
