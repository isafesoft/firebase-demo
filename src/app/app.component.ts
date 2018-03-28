import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  items$: Observable<any[]>;

  constructor(db: AngularFireDatabase)
  {
    this.items$ = db.list('/books').valueChanges();
    
  }
  /*
  constructor (db: AngularFireDatabase){
    this.items = db.list('/books').valueChanges();
    this.subscription = this.items.subscribe(val => console.log(val));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  */
}
