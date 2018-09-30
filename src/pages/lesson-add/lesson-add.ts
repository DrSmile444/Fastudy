import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { LessonHelper } from "../../services/lessonHelper";
import { take } from "rxjs/operators";

@IonicPage({
  name: "lesson-add-page",
  segment: "lesson-add/:id"
})
@Component({
  selector: "page-lesson-add",
  templateUrl: "lesson-add.html"
})
export class LessonAddPage {
  data = {};
  title = "";
  questions: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public lessonHelper: LessonHelper
  ) {}

  ionViewDidLoad() {
    const data = this.navParams.data;
    this.data = data;

    this.lessonHelper.questionSubject.pipe(take(1)).subscribe(el => {
      console.log(el);
    });
    // console.log(this.lessonHelper);

    this.title = data.title;

    console.log("ionViewDidLoad LessonAddPage");
  }

  public addQuestion(question) {
    this.navCtrl.push("question-add-page", {
      question
    });
  }
}
