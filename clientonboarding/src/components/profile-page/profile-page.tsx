import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'profile-page',
  styleUrl: 'profile-page.css',
  shadow: true
})

export class ProfilePage {
  @Prop() profileId: string;
  @Prop() color: string = "Blue";

  render() {
    console.log(this.color);
    console.log(this.profileId);
    return (
      <div class="root">
        <div class="hero">
          <img src="https://research.cbc.osu.edu/sokolov.8/wp-content/uploads/2017/12/profile-icon-png-898.png" />
          <h1>{this.color}</h1>
          <span class="title">Contact</span> <span>+9199889988</span>
        </div>
        <div class="content">
          <h3 class="detail-heading">Basic Details</h3>
          <div>
            <div class="inline">
              <div class="label">Name</div>
              <div>Marco {this.profileId} </div>
            </div>
            <div class="inline">
              <div class="label">Date Of Birth</div>
              <div>02-Nov-1979</div>
            </div>
          </div>
        </div>
        <div class="content">
          <h3 class="detail-heading">Contact Details</h3>
          <div>
            <div class="inline">
              <div class="label">Primay Email</div>
              <div>marcovalt@gmail.com</div>
            </div>
            <div class="inline">
              <div class="label">Alternate Email</div>
              <div>N/A</div>
            </div>
            <div class="inline">
              <div class="label">Mobile</div>
              <div>+39 874 274 9482</div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
