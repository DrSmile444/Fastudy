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
  segment: "question-add"
})
@Component({
  selector: "page-question-add",
  templateUrl: "question-add.html"
})
export class QuestionAddPage {
  question = "";
  variants = [];
  right = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public lessonHelper: LessonHelper,
    public toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {}

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

    const setObj = {
      question: this.question,
      variants: this.variants
    };

    console.log("our data: ", setObj);

    this.navCtrl.pop();
    this.lessonHelper.questionSubject.next({
      data: setObj,
      time: Date.now(),
      right: this.right
    });
  }

  public setRightAnswer(event) {
    (<any>this.right) = event.target.value;
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
