import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { LessonHelper } from "../../services/lessonHelper";
import { FirebaseProvider } from "../../services/firebaseHelper";
import { take } from "rxjs/operators";

@IonicPage({
  name: "lesson-add-page",
  segment: "lesson-add"
})
@Component({
  selector: "page-lesson-add",
  templateUrl: "lesson-add.html"
})
export class LessonAddPage {
  data = {};
  title = "";
  titleTruncated = "";
  theory = "";
  questions = [];
  correct = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public lessonHelper: LessonHelper,
    public firebase: FirebaseProvider
  ) {}
  ngOnInit(): void {
    if (!this.navParams.data.path) {
      this.navCtrl.goToRoot({});
    }
    this.lessonHelper.questionSubject
      // .pipe(take(1))
      .subscribe(el => {
        this.correct.push((<any>el).right);
        this.questions = [...this.questions, (<any>el).data];
        console.log(this.questions);
      });
  }

  ionViewDidLoad() {
    const data = this.navParams.data;
    this.data = data;

    this.title = data.title;
  }

  public submitLesson() {
    const { title, theory, questions, correct } = this;
    const lessonObj = {
      title,
      theory,
      test: {
        correct,
        questions
      }
    };

    this.firebase
      .getData(this.navParams.data.path)
      .once("value")
      .then(snapshot => {
        let array = [lessonObj];

        if (snapshot.val()) {
          array = [...(snapshot.val() || []), lessonObj];
        }

        this.firebase.setData(this.navParams.data.path, array);
        this.navCtrl.goToRoot({});
      });
  }

  public truncateTitle() {
    this.titleTruncated = this.truncate(this.title, 10);
  }

  public truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 3) + "..." : str;
  }

  public addQuestion(question) {
    const setObj = {
      question
    };

    this.navCtrl.push("question-add-page", setObj);
  }
}
