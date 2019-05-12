import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../UserService';
import { Product } from '../webpage/webpage.component'
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { LocalizeRouterService } from 'localize-router';
import { EmbedVideoService } from 'ngx-embed-video';
import { FacebookService, InitParams } from 'ngx-facebook';
@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})

export class DetailproductComponent implements OnInit {

  Product: Product[];
  Products: Product[];
  productdataSource: MatTableDataSource<Product>;
  productdata = Object.assign(Product);
  id = localStorage.getItem('id');
  idn = parseInt(this.id, 10);
  ids=[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  pagedItems: any[];
  constructor(private userService: UserService,private router: Router, private localize: LocalizeRouterService,
    private embedService: EmbedVideoService,private fb: FacebookService
    ) 
    {
      let initParams: InitParams = {
        appId: '1234566778',
        xfbml: true,
        version: 'v2.8'
      };
      fb.init(initParams);
    this.userService.getProduct().subscribe(productdata => {
    this.Product = productdata;
    this.productdataSource = new MatTableDataSource(this.Product);
    this.productdataSource.paginator = this.paginator;
    this.productdataSource.sort = this.sort;
    this.Products = productdata.find(x=>x.Id === this.idn);
  })
this.updateURL() }

  ngOnInit() {
    this.userService.getProduct().subscribe(productdata => {
      this.Product = productdata;
      this.productdataSource = new MatTableDataSource(this.Product);
      this.productdataSource.paginator = this.paginator;
      this.productdataSource.sort = this.sort;
      this.Products = productdata.find(x=>x.Id === this.idn);
      this.ids.push(this.Products)
    })  
  }
  updateURL() {
    if (history.pushState) {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?id=' + this.id;
        window.history.pushState({path:newurl},'',newurl);
    }
  }
  updateURLs(){
    console.log(window.location.pathname.slice(4))
    if (window.location.pathname.slice(4) == 'detailproduct' || window.location.pathname.slice(4) == 'detailprodukt') {
      this.router.navigate([this.localize.translateRoute('/detailproduct')]);
      this.updateURL();
    }
    this.updateURL();
  }
  click(){
    console.log(1)
    console.log(this.Products.find(x=>x.Id === this.idn))
  }
}
