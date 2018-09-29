import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { directionExample } from "../base.example";
import { FirebaseProvider } from "../../services/firebaseHelper";

@IonicPage({
  name: "direction-page",
  segment: "direction/:id"
})
@Component({
  selector: "direction-page",
  templateUrl: "direction.html"
})
export class DirectionPage {
  data = [];
  directionName: String = "";
  directionLessons: Array<any> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firebase: FirebaseProvider
  ) {}

  public goBack() {
    this.navCtrl.goToRoot({
      isNavRoot: false
    });
  }

  ionViewDidLoad() {
    if (!this.navParams.data.data) {
      window.location.href = "#/";
      return 0;
    }

    const data = this.navParams.data;
    this.data = data;
    this.directionName = data.id;
    this.setLessonList();
  }

  public setLessonList() {
    this.directionLessons = this.data.data;
  }

  public onLessonClick(lesson) {
    this.navCtrl.push("lesson-page", {
      id: lesson.title,
      data: lesson
    });
  }

  public addLesson() {
    this.navCtrl.push("lesson-add-page", {
      title: this.directionName
    });
  }
}
