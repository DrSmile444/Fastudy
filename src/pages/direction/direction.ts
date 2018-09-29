import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { directionExample } from "./directions.example";

@IonicPage({
  name: "direction-page",
  segment: "direction/:id"
})
@Component({
  selector: "direction-page",
  templateUrl: "direction.html"
})
export class DirectionPage {
  directionName: String = "";
  directionLessons: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public goBack() {
    this.navCtrl.goToRoot({
      isNavRoot: false
    });
  }

  ionViewDidLoad() {
    const name = this.navParams.data.id;
    this.directionName = name;
    this.directionLessons = directionExample[name];
    console.log(this.directionLessons);
    console.log("ionViewDidLoad DirectionPage");
  }

  public onLessonClick(lesson) {
    this.navCtrl.push("lesson-page", {
      id: lesson
    });
  }
}
