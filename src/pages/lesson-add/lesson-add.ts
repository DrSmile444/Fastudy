import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the LessonAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  questions = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    const data = this.navParams.data;
    this.data = data;

    this.title = data.title;

    console.log("ionViewDidLoad LessonAddPage");
  }
}
