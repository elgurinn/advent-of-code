import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day01Component } from './day01/day01.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Day01Component }]),
  ],
  declarations: [Day01Component],
  exports: [Day01Component],
})
export class Aoc2021Day01Module {}
