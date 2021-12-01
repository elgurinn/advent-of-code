import { Component, ChangeDetectionStrategy } from '@angular/core';

import { InputsService } from '@advent-of-code/shared/data-access/inputs';
import { map, Observable, share } from 'rxjs';

@Component({
  selector: 'advent-of-code-day01',
  templateUrl: './day01.component.html',
  styleUrls: ['./day01.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Day01Component {
  input$: Observable<number[]>;
  part1$: Observable<number>;
  part2$: Observable<number>;
  constructor(private inputsService: InputsService) {
    this.input$ = this.inputsService.getInput('day1').pipe(
      map((res) => res.split('\n').map((toNumber) => +toNumber)),
      share()
    );

    this.part1$ = this.input$.pipe(
      map((res: number[]) =>
        res.reduce(
          (acc: number, value: number, index: number, array: number[]) => {
            value > array[index - 1] && ++acc;
            return acc;
          },
          0
        )
      )
    );

    this.part2$ = this.input$.pipe(
      map((res: number[]) =>
        res.reduce(
          (acc: number, value: number, index: number, array: number[]) => {
            const currentSum = array[index - 2] + array[index - 1] + value;
            const previousSum =
              array[index - 3] + array[index - 2] + array[index - 1];
            currentSum > previousSum && ++acc;
            return acc;
          },
          0
        )
      )
    );
  }
}
