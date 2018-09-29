import { NgModule } from "@angular/core";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FirebaseProvider } from "./firebaseHelper";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [FirebaseProvider, HttpClient, HttpHandler]
})
export class FeatureModule {}
