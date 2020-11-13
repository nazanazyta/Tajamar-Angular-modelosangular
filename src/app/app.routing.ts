import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CollatzComponent } from './components/collatz/collatz.component';

const appRoutes: Routes = [
    // { path: "collatz", component: CollatzComponent },
    { path: "collatz/:numero", component: CollatzComponent }
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);