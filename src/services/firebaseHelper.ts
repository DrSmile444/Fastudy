import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AlertController } from "ionic-angular";
import firebase from "firebase";
import config from "../config";

import { AngularFirebase } from "@angular/fire/firebase";

@Injectable()
export class FirebaseProvider {
  constructor(public http: HttpClient, private alertCtrl: AlertController) {
    this.authenticate();
  }

  private authenticate(): void {
    firebase.initializeApp(config);
  }

  public getData(path) {
    const database = firebase.database();

    return database.ref(path);
  }
}
