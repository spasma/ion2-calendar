import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as dayjs from 'dayjs';

import { CalendarModal, CalendarModalOptions } from '../ion2-calendar';

@Component({
  selector: 'demo-modal-locale',
  template: `
    <ion-button (click)="openCalendar()">
      locale
    </ion-button>
  `,
})
export class DemoModalLocaleComponent {
  date: Date = new Date();

  constructor(public modalCtrl: ModalController) {
    dayjs.locale('zh-cn');
  }

  async openCalendar() {
    const options: CalendarModalOptions = {
      title: 'LOCALE',
      defaultDate: this.date,
      monthFormat: 'yyyy 年 MM 月',
      weekdays: dayjs.weekdaysShort(),
      weekStart: 1,
    };

    const myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      componentProps: { options },
    });

    myCalendar.present();

    const event: any = await myCalendar.onDidDismiss();
    const { data: date, role } = event;

    if (role === 'done') {
      this.date = date.dateObj;
    }
    console.log(date);
    console.log('role', role);
  }
}
