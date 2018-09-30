import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionAddPage } from './question-add';

@NgModule({
  declarations: [
    QuestionAddPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionAddPage),
  ],
})
export class QuestionAddPageModule {}
