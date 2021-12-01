import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'day1',
    loadChildren: () =>
      import('@advent-of-code/aoc2021/day01').then((m) => m.Aoc2021Day01Module),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
