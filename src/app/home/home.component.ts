import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bannerlist:banner[];
  onelist:one[];
  twolist:two[];
  constructor() {
    this.bannerlist=[
      {transitive:'All In One',name:'Hello Welcome to Mobile Shop',btnname:'Shop Now'},
    ];
    this.onelist=[
      {
        image:'assets/images/home-banner.png',
        header2:'About Our Shop',
        p1:'maecenas feugiat ex purus, quis volutpat lacus placerat',
        p2:'Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada. Praesent in sem ex. Morbi mattis sapien pretium tellus venenatis, at egestas urna ornare.',
        p3:'Vivamus fermentum nibh vel pharetra blandit. Cras a purus urna. Sed et libero ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse id hendrerit felis. Nulla viverra tempor dui at congue. Pellentesque quis nulla ornare, congue nisi id, finibus nulla. Aliquam sit amet hendrerit purus. Donec libero massa, posuere fermentum eros sit amet, maximus fringilla augue. Maecenas at rhoncus lorem. Vivamus ultricies consequat est, efficitur convallis libero. Vivamus rutrum semper mauris, vitae consequat eros tempor ac. Pellentesque et ornare sapien'
      }
    ];
    this.twolist=[
      {
        header1:'Samsung',
        p1:'Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu',
        linkmore:'Learn More',
        header2:'Red Me',
        p2:'Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed',
        header3:'Oppo',
        p3:'Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula.'
      }
    ];
   }

  ngOnInit(): void {
  }

}
export class banner
{
  transitive:String;
  name:String;
  btnname:String;
}
export class one
{
  image:String;
  header2:String;
  p1:String;
  p2:String;
  p3:String;
}
export class two
{
  header1:String;
  p1:String;
  linkmore:String;
  header2:String;
  p2:String;
  header3:String;
  p3:String;
}