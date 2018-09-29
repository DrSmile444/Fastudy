import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  directionSlider: Array<Object> = [
    {
      name: "Кемпинг",
      img: ""
    },
    {
      name: "Медицина",
      img: ""
    },
    {
      name: "Программирование",
      img: ""
    }
  ];

  directionList: Array<String> = [
    "Программирование",
    "Кэмпинг",
    "Медицина",
    "Рыбалка",
    "Исскуство",
    "Фильмы"
  ];

  constructor(public navCtrl: NavController) {}
}
