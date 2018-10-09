import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SolicitarCitaComponent } from './components/solicitar-cita/solicitar-cita.component';


const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'citas', component: SolicitarCitaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
