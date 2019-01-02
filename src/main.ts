import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Ng2Bs3ModalModule } from './app/ng2-bs3-modal';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(Ng2Bs3ModalModule)
  .catch(err => console.error(err));
