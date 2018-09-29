import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { directionExample } from "./directions.example";

@IonicPage({
  name: "lesson-page",
  segment: "group/:id"
})
@Component({
  selector: "page-lesson",
  templateUrl: "lesson.html"
})
export class LessonPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LessonPage");
  }
}
