import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly whatsappUrl = 'https://wa.me/5521996279623?text=Olá%2C%20meu%20nome%20%C3%A9%20%5BSeu%20nome%5D.%20Quero%20solicitar%20um%20or%C3%A7amento%21';

  openWhatsApp() {
    window.open(this.whatsappUrl, '_blank');
  }
}
