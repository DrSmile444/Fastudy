import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  ModalController,
  NavParams
} from "ionic-angular";

import { TestResultPage } from "../test-result/test-result";

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
  variantsRight = [];
  variantsUser = [];
  questionNumber = 0;
  currentVariant = 0;
  showNextButton = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    const data = this.navParams.data;
    const test = data.test;
    this.title = this.navParams.data.title;

    this.data = test;
    this.variantsRight = test.correct;

    this.setQuestion(test.questions[0], data.title);
  }

  private setQuestion(question: Object, title: String) {
    this.title = (<any>question).title || title;
    this.question = (<any>question).question;
    this.variants = <any>this.setVariantIndexes((<any>question).variants);
  }

  public variantClick(questionIndex, dotIndex) {
    this.currentVariant = questionIndex;
    this.setIndexedDotColor(dotIndex);
    this.showNextButton = true;
  }

  public setNextQuestion() {
    this.questionNumber += 1;
    const currentQuestionIndex = this.questionNumber;
    const currentQuestion = (<any>this.data).questions[currentQuestionIndex];
    const title = this.title;
    this.variantsUser.push(this.currentVariant);

    if (currentQuestion) {
      this.setQuestion(currentQuestion, title);
      this.showNextButton = false;
    } else {
      const testData = { server: this.variantsRight, user: this.variantsUser };
      const profileModal = this.modalCtrl.create(TestResultPage, testData);
      profileModal.present();
    }
  }

  private setVariantIndexes(array) {
    const result = [];

    array.forEach((variant, index) => {
      const variantObj = {
        text: variant,
        index
      };

      result.push(variantObj);
    });

    return this.shuffle(result);
  }

  private setIndexedDotColor(index) {
    const dots = document.querySelectorAll(".question-variant__circle");

    (<any>dots).forEach(dot => {
      dot.style.background = "#fff";
    });

    (<any>dots[index]).style.background = "rgba(0,0,0,.5)";
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

  private shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
