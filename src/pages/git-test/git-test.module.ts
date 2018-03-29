import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GitTestPage } from './git-test';

@NgModule({
  declarations: [
    GitTestPage,
  ],
  imports: [
    IonicPageModule.forChild(GitTestPage),
  ],
})
export class GitTestPageModule {}
