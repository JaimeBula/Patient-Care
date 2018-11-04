import { Injectable } from '@angular/core';
import { MatBottomSheetConfig, MatBottomSheet } from '@angular/material';
import { ToastsystemComponent, ToastType, ToastSystemConfig } from './toastsystem/toastsystem.component';


@Injectable({
  providedIn: 'root'
})
export class ToastsystemService {

  constructor(private bottomSheet: MatBottomSheet) { }

  public ShowToastMessage(toastType:ToastType, message:string)
  {
    let sheetConfig = new MatBottomSheetConfig();
    let toastConfig = new ToastSystemConfig(toastType, message);
    sheetConfig.data = toastConfig;
    this.bottomSheet.open(ToastsystemComponent, sheetConfig);
  }
}
