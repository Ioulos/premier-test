import { IonicStorageModule } from "@ionic/storage";
import { HttpClientModule } from "@angular/common/http";
import { MovieDetailPageModule } from "../pages/movie-detail/movie-detail.module";
import { MovieListPageModule } from "../pages/movie-list/movie-list.module";
import { MyMoviesPageModule } from "../pages/my-movies/my-movies.module";
import { CameraPage } from "../pages/camera/camera";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import  { GitTestPage} from "../pages/git-test/git-test";


import { MyApp } from "./app.component";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { MovieApiProvider } from "../providers/movie-api/movie-api";
import { FavoriteMovieProvider } from "../providers/favorite-movie/favorite-movie";
import { Camera } from '@ionic-native/camera';
import { Flashlight } from '@ionic-native/flashlight';

@NgModule({
  declarations: [MyApp, CameraPage, GitTestPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    MyMoviesPageModule,
    MovieListPageModule,
    MovieDetailPageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, CameraPage, GitTestPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MovieApiProvider,
    FavoriteMovieProvider,
    Camera,
    Flashlight
  ]
})
export class AppModule {}