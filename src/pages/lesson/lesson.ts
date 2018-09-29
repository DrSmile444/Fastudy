import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

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
  test: Array<Object> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    if (!this.navParams.data.data) {
      window.location.href = "#/";
      return 0;
    }

    const name = this.navParams.data.id;
    this.data = this.navParams.data.data;
    this.theory = (<any>this.data).theory.split("\n");
    this.title = this.truncate((<any>this.data).title || name, 20);
    this.test = (<any>this.data).test;
  }

  public goToTest(test: Array<any>) {
    this.navCtrl.push("test-page", {
      test,
      title: this.title
    });
  }
}
