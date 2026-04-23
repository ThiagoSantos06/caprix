import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';
import { provideAnimations } from '@angular/platform-browser/animations';

const MyPreset = definePreset(Aura, {
    semantic: {
        colorScheme: {
            light: {
                surface: {
                    0: '#ffffff',
                    50: '#ffffff',
                    100: '#ffffff',
                    200: '#e5e7eb',
                    900: '#000000',
                }
            },
            dark: {
                surface: {
                    0: '#ffffff',
                    50: '#ffffff',
                    100: '#ffffff',
                    900: '#000000',
                }
            }
        }
    }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })
    ),
    
    provideAnimations(),
    
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
            darkModeSelector: false
        }
      }
    })
  ]
};