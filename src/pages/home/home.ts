import { Component } from "@angular/core";
import { NavController, AlertController } from "ionic-angular";
import { FirebaseProvider } from "../../services/firebaseHelper";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  data: Array<any> = [];
  directionList: Array<Object> = [];

  constructor(
    public navCtrl: NavController,
    public firebase: FirebaseProvider,
    public alertCtrl: AlertController
  ) {}

  ngOnInit(): void {
    this.setDirectionList();
    this.checkIsUser();
  }

  public setDirectionList() {
    const serverDirectionList = [];

    this.firebase.getData("/subjects/").on("value", snapshot => {
      const data = snapshot.val();
      this.data = data;

      data.forEach(el => {
        const direction = {
          title: el.title
        };
        serverDirectionList.push(direction);
      });

      this.directionList = serverDirectionList;
    });
  }

  public checkIsUser() {
    const user = localStorage.getItem("userName");

    if (!user) {
      let alert = this.alertCtrl.create({
        title: "Введите ваше имя:",
        inputs: [
          {
            name: "username",
            placeholder: "Имя"
          }
        ],
        buttons: [
          {
            text: "Login",
            handler: data => {
              localStorage.setItem("userName", data.username);
            }
          }
        ]
      });
      alert.present();
    }
  }

  public onDirectionClick(direction) {
    this.navCtrl.push("direction-page", {
      id: direction,
      data: this.getLessonData(direction)
    });
  }

  private getLessonData(name) {
    for (let i = 0, n = this.data.length; i < n; i++) {
      if (this.data[i].title === name) {
        return {
          data: this.data[i].lessons,
          path: "subjects/" + i,
          title: this.data[i].title
        };
      }
    }
  }
}
