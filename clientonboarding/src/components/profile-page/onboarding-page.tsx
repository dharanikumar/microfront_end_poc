import {Component, h, Prop, State} from '@stencil/core';
import Http from 'core';
@Component({
  tag: 'onboarding-page',
  styleUrl: 'onboarding-page.css',
  shadow: true
})

export class ProfilePage {
  @Prop() profileId: string;
  @Prop() color: string = "Blue";
  @State() showSuccessMessage: boolean = false;
  componentWillLoad() {
  }


  formSubmit(event) {
    event.preventDefault();
    new Http().post();
    this.showSuccessMessage = true;
  }

  render() {
    if(this.showSuccessMessage) {
      return (
        <div class="root">
          <div class="content">
            <div class="message" >
              <p>Customer created Successfully </p>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div class="root">
        <div class="content">
          <form onSubmit={(e) => this.formSubmit(e)}>
              <h1>New Customer</h1>
            <div class="columns">
              <div class="item">
                <label htmlFor="fname"> First Name<span>*</span></label>
                <input id="fname" type="text" name="fname" required/>
              </div>
              <div class="item">
                <label htmlFor="lname"> Last Name<span>*</span></label>
                <input id="lname" type="text" name="lname" required/>
              </div>
              <div class="item">
                <label htmlFor="address1">Address 1<span>*</span></label>
                <input id="address1" type="text"   name="address1" required/>
              </div>
              <div class="item">
                <label htmlFor="address2">Address 2<span>*</span></label>
                <input id="address2" type="text"   name="address2" required/>
              </div>
              <div class="item">
                <label htmlFor="state">State<span>*</span></label>
                <input id="state" type="text"   name="state" required/>
              </div>
              <div class="item">
                <label htmlFor="zip">Zip/Postal Code<span>*</span></label>
                <input id="zip" type="text" name="zip" required/>
              </div>
              <div class="item">
                <label htmlFor="city">City<span>*</span></label>
                <input id="city" type="text"   name="city" required/>
              </div>
              <div class="item">
                <label htmlFor="eaddress">Email Address<span>*</span></label>
                <input id="eaddress" type="text"   name="eaddress" required/>
              </div>
              <div class="item">
                <label htmlFor="phone">Phone<span>*</span></label>
                <input id="phone" type="tel"   name="phone" required/>
              </div>
            </div>
            <div class="btn-block">
              <button type="submit" >Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
