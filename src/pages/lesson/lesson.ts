import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { lessonsExample } from "../base.example";

@IonicPage({
  name: "lesson-page",
  segment: "group/:id"
})
@Component({
  selector: "page-lesson",
  templateUrl: "lesson.html"
})
export class LessonPage {
  title: String = "";
  data: Object;
  theory: Array<any> = [];
  // theory = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    const name = this.navParams.data.id;
    this.data = lessonsExample[name];
    this.theory = (<any>this.data).theory.split("\n");
    this.title = (<any>this.data).title || name;
  }
}
