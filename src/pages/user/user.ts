import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "user-page",
  segment: "user"
})
@Component({
  selector: "page-user",
  templateUrl: "user.html"
})
export class UserPage {
  userName = localStorage.getItem("userName");
  userLetter = "D";
  userCurrentLvl = 10;
  userCurrentExp = localStorage.getItem("userXP") || 0;
  userExpGoal = 1200;
  serverLevels = [0, 10, 50, 100, 200, 500, 1000, 1500, 2000, 2500, 3000];
  userCurrentRemainder = 10;
  userMostLikelyCourse = "Машины";
  userPercentProgress = 50;
  userPercentProgressString = "";

  badgesArray = [];
  badgesTitleArray = [
    "Мастер 90лвл",
    "Супер-человек",
    "Любитель животных",
    "Черная вдова",
    "Просветительство",
    "Лесник",
    "Программист",
    "Не повезло...",
    "Химик",
    "Новичек",
    "Хэллоувин",
    "Уже не допомогти",
    "Пройшов вси курси на 100%",
    "Нове досягнення", // пройшов 3 тести
    "Запоров найлегший тест", // 1 видповить и 0%
    "Спасатель" // пройшов медецину на 100%
  ];
  badgesGotArray = "10000001001000101011";

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.userLetter = this.userName && this.userName[0].toUpperCase();
    this.getBadgesArray();
    this.getLevel();
  }

  public getLevel() {
    this.serverLevels.forEach((level, index) => {
      if (this.userCurrentExp >= level) {
        this.userCurrentLvl = index + 1;
        this.userExpGoal = this.serverLevels[index + 2];
        this.userPercentProgress =
          (this.userCurrentExp / this.userExpGoal) * 100;

        console.log(this.userPercentProgress);

        this.userPercentProgressString = "user-lvl__progress-level";
      }
    });
    this.userCurrentRemainder = this.userExpGoal - this.userCurrentExp;
  }

  public getPercentProgress() {
    if (this.userPercentProgress >= 90) {
      this.userPercentProgressString = "user-lvl__progress-level w90";
    } else if (this.userPercentProgress >= 75) {
      this.userPercentProgressString = "user-lvl__progress-level w75";
    } else if (this.userPercentProgress >= 50) {
      this.userPercentProgressString = "user-lvl__progress-level w50";
    } else if (this.userPercentProgress >= 25) {
      this.userPercentProgressString = "user-lvl__progress-level w25";
    } else if (this.userPercentProgress >= 5) {
      this.userPercentProgressString = "user-lvl__progress-level w5";
    } else {
      this.userPercentProgressString = "user-lvl__progress-level w0";
    }

    return this.userPercentProgressString;
  }

  public getBadgesArray() {
    const result = [];

    for (let index = 1; index < 10; index++) {
      result.push("../../assets/badges/0" + index + ".gif");
    }

    for (let index = 10; index < 21; index++) {
      result.push("../../assets/badges/" + index + ".gif");
    }

    this.badgesArray = result;
  }

  public compareBadges(index) {
    let defaultStyles = "user-badges__badge-image blur";

    if (this.badgesGotArray[index]) {
      defaultStyles = "user-badges__badge-image got";
    }

    return defaultStyles;
  }
}
