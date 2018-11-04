import { Component, OnInit } from "@angular/core";
import { ToastsystemService } from "../toastsystem.service";
import { MatBottomSheetRef } from "@angular/material";

@Component({
  selector: "app-toastsystem",
  templateUrl: "./toastsystem.component.html",
  styleUrls: ["./toastsystem.component.css"]
})
export class ToastsystemComponent implements OnInit {
  constructor(private bottomSheetRef: MatBottomSheetRef<ToastsystemComponent>) {
    this.toastConfig = <ToastSystemConfig>(
      this.bottomSheetRef.containerInstance.bottomSheetConfig.data
    );
  }

  toastConfig: ToastSystemConfig;
  headerText: string;
  confirmText: string;

  ngOnInit() {}

  checkEnumError(toastType: ToastType) {
    if (toastType == ToastType.Error) {
      this.headerText = "Warning";
      this.confirmText = "Ok, try again.";
      return true;
    } else {
      return false;
    }
  }

  checkEnumInfo(toastType: ToastType) {
    if (toastType == ToastType.Information) {
      this.headerText = "Message";
      this.confirmText = "¡Ready!";
      return true;
    } else {
      return false;
    }
  }

  notificationClick(){
    this.bottomSheetRef.dismiss();
  }
}

export enum ToastType {
  Information,
  Error
}

export class ToastSystemConfig {
  constructor(public toastType: ToastType, public message: string) {}
}
