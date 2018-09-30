import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable()
export class LessonHelper {
  questionSubject = new Subject();
  constructor() {}
}
