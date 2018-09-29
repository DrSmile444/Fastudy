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

  directionList: Array<Object> = [
    { title: "Программирование" },
    { title: "Кэмпинг" },
    { title: "Медицина" },
    { title: "Рыбалка" },
    { title: "Исскуство" },
    { title: "Фильмы" }
  ];

  constructor(public navCtrl: NavController) {}

  public onDirectionClick(direction) {
    this.navCtrl.push("direction-page", {
      id: direction
    });
  }
}
