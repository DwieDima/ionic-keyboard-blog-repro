import { Component } from "@angular/core";
import { KeyboardStyle, Plugins } from "@capacitor/core";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Platform } from "@ionic/angular";

const { Keyboard } = Plugins;

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      Keyboard.setStyle({ style: KeyboardStyle.Dark });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
