import { Component, Output, EventEmitter } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { LessonHelper } from "../../services/lessonHelper";

@IonicPage({
  name: "question-add-page",
  segment: "question-add/:id"
})
@Component({
  selector: "page-question-add",
  templateUrl: "question-add.html"
})
export class QuestionAddPage {
  question = "";
  variants = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public lessonHelper: LessonHelper,
    public toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    console.log(this.navParams.data);
    console.log("ionViewDidLoad QuestionAddPage");
  }

  public addVariant() {
    this.variants.push("");
  }

  public submitQuestion() {
    let breakFunc = false;
    if (this.question.length < 10) {
      this.showToast("Слишком маленький вопрос");
      return 1;
    } else if (this.variants.length < 2) {
      this.showToast("Минимум два варианта");
      return 1;
    }

    this.variants.forEach(element => {
      if (element.trim() === "") {
        this.showToast("Вариант не может быть пустым");
        breakFunc = true;
        return 1;
        // break;
      }
    });

    if (breakFunc) return 1;

    this.navCtrl.push("lesson-add-page");
    this.lessonHelper.questionSubject.next({
      text: this.question,
      variants: this.variants
    });
  }

  public log(param, index) {
    this.variants[index] = param.target.value;
  }

  public showToast(text) {
    const toast = this.toastCtrl.create({
      message: text,
      position: "top",
      duration: 3000
    });
    toast.present();
  }

  trackByIdx(index: number, obj: any): any {
    return index;
  }
}
