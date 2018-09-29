import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "test-page",
  segment: "test/:id"
})
@Component({
  selector: "page-test",
  templateUrl: "test.html"
})
export class TestPage {
  data: Array<Object>;
  title: String = "";
  question: String = "";
  variants: Array<String> = [];
  questionNumber = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    const data = this.navParams.data.test;
    this.data = data;
    const title = this.navParams.data.title;
    this.setQuestion(data.questions[0], title);
  }

  private setQuestion(question: Object, title: String) {
    this.title = (<any>question).title || title;
    this.question = (<any>question).question;
    this.variants = (<any>question).variants;
  }

  public setNextQuestion() {
    this.questionNumber += 1;
    const currentQuestionIndex = this.questionNumber;
    const currentQuestion = (<any>this.data).questions[currentQuestionIndex];
    const title = this.title;

    if (currentQuestion) {
      this.setQuestion(currentQuestion, title);
    } else {
      alert("end");
    }
  }

  public setFontSize(text) {
    let size = 30;
    const result = "font-size:";
    const textLength = text.length;

    if (textLength > 100) {
      size = 15;
    } else if (textLength > 50) {
      size = 20;
    } else if (textLength > 25) {
      size = 25;
    }

    return result + size + "px";
  }
}
