import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const SharedComponents = [
  FooterComponent,
  HeaderComponent,
  NavBarComponent

]
const Pipes = [

];

const Directives = [];
const declarations = [...Directives, SharedComponents, ...Pipes];
@NgModule({
  declarations: [declarations],
  imports: [
    CommonModule
  ],
  exports: [
    declarations,

  ],
})
export class SharedModule {}
