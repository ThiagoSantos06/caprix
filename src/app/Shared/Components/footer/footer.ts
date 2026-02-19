import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly whatsappUrl = 'https://wa.me/5521996279623?text=Olá%2C%20meu%20nome%20%C3%A9%20%5BSeu%20nome%5D.%20Quero%20solicitar%20um%20or%C3%A7amento%21';

  openWhatsApp() {
    window.open(this.whatsappUrl, '_blank');
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}