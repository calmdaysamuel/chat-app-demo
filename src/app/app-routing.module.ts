import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPageComponent } from 'src/pages/chat-page/chat-page.component';
import { ExplorePageComponent } from 'src/pages/explore-page/explore-page.component';

const routes: Routes = [
  {
    path: '',
    component: ExplorePageComponent,
  },
  {
    path: 'room/:id',
    component: ChatPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
