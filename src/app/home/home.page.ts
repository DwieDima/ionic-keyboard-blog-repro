import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {
    const input = document.querySelector("ion-textarea");
    window.addEventListener("ionKeyboardDidShow", (ev) => {
      const { keyboardHeight } = ev.detail;
      console.log(ev.detail);
      input.style.setProperty(
        "transform",
        `translate3d(0, ${keyboardHeight}px, 0)`
      );
    });

    window.addEventListener("ionKeyboardDidHide", () => {
      input.style.removeProperty("transform");
    });
  }
}
