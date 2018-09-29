import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { FeatureModule } from "../services/servicesModule";
import { HttpClientModule } from "@angular/common/http";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";
import { TestResultPage } from "../pages/test-result/test-result";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@NgModule({
  declarations: [MyApp, HomePage, ListPage, TestResultPage],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    FeatureModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ListPage, TestResultPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
