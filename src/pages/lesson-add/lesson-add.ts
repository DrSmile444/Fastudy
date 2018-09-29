import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    const data = this.navParams.data;
    this.data = data;

    this.title = data.title;

    console.log("ionViewDidLoad LessonAddPage");
  }

  public addQuestion(question) {
    this.navCtrl.push("question-add-page", {
      question
    });
  }
}
