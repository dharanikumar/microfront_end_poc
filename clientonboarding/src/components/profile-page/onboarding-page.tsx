import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'onboarding-page',
  styleUrl: 'onboarding-page.css',
  shadow: true
})

export class ProfilePage {
  @Prop() profileId: string;
  @Prop() color: string = "Blue";
  componentWillLoad() {
    console.log("its loading")
  }
  render() {
    return (
      <div class="root">
        <ion-input placeholder="Enter Input"></ion-input>
        <ion-label position="stacked">Multiple Inputs</ion-label>
        <ion-input placeholder="Address Line 1"></ion-input>
        <ion-input placeholder="Address Line 2"></ion-input>
      </div>
    );
  }
}
