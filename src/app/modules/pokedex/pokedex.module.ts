import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyNumberPipe } from './../../pipes/my-namber.pipe';
import { ListItemComponent } from './components/list-item/list-item.component';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { ListComponent } from './views/list/list.component';



const CompList = [
  ListItemComponent,
  ListComponent
]

@NgModule({
  declarations: [
    ...CompList,
    MyNumberPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokedexRoutingModule,
  ],
  exports: [
    ...CompList
  ]
})
export class PokedexModule { }
