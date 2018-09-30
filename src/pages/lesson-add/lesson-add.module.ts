import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LessonAddPage } from './lesson-add';

@NgModule({
  declarations: [
    LessonAddPage,
  ],
  imports: [
    IonicPageModule.forChild(LessonAddPage),
  ],
})
export class LessonAddPageModule {}
