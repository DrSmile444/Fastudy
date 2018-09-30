import { NgModule } from "@angular/core";
import { FirebaseProvider } from "./firebaseHelper";
import { LessonHelper } from "./lessonHelper";

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [FirebaseProvider, LessonHelper]
})
export class FeatureModule {}
