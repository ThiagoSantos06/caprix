import { Component, signal } from '@angular/core';
import { Header } from "./Shared/Components/header/header";
import { Hero } from "./Pages/hero/hero";
import { Feature } from "./Pages/feature/feature";
import { AboutMe } from "./Pages/about-me/about-me";
import { Contact } from "./Pages/contact/contact";
import { Location } from "./Pages/location/location";
import { Footer } from "./Shared/Components/footer/footer";
import { Faq } from "./Pages/faq/faq";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Feature, AboutMe, Contact, Location, Footer, Faq],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('caprix');
}
