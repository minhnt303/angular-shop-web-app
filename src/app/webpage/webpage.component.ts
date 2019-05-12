import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef,MatIcon} from '@angular/material';
import {MatIconRegistry} from '@angular/material';
import {FormControl} from '@angular/forms';
import { IProducts } from '../products';
import { Subject } from 'rxjs';
import { UserService } from '../UserService';
import { GallaryService } from  '../gallary.service';
import { PagerService } from '../_services/index';
import { Router } from '@angular/router';
import { LocalizeRouterService } from 'localize-router';
export class Product {
  Id: number;
  Image: string;
  Name: string;
  Price: number;
  Details: string;
  Quanlity: number;
  constructor(Id, Image, Name, Price, Details,Quanlity) {
    this.Id = Id;
    this.Image = Image;
    this.Name = Name;
    this.Price = Price;
    this.Details = Details;
    this.Quanlity = Quanlity;
  }
}
@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.css']
})

export class WebpageComponent implements OnInit {
  activeUsers:String[];
  inactiveUsers:String[];
  gallaryimage:object;

  Id:any = [];
  productId: string;
  Product: Product[];
  // pager object
  pager: any = {};
  breakpoint: number;
  // paged items
  pagedItems: any[];

  itemperPage: number;
  productItem: number;

  productdataSource: MatTableDataSource<Product>;
  productdata = Object.assign(Product);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['Image', 'Name', 'Price', 'Details'];
  
  constructor(private userService: UserService,private gallaryservice:GallaryService, private pagerService: PagerService,
    private router: Router, private localize: LocalizeRouterService) { 
    this.userService.getProduct().subscribe(productdata => {
      this.Product = productdata;
      this.productdataSource = new MatTableDataSource(this.Product);
      this.productdataSource.paginator = this.paginator;
      this.productdataSource.sort = this.sort;
      // initialize to page 1
      this.setPage(1);
      this.productItem = this.Product.length;
    })
    localStorage.removeItem('id');
   }
  ngOnInit() {
    localStorage.removeItem('id');
    this.gallaryimage=this.gallaryservice.images;
    if(window.innerWidth <= 810){
      this.breakpoint = 1;
      this.itemperPage = 5;
      this.pagerService.getPager(200,1,5);
    }
    else if(window.innerWidth <= 1200 && window.innerWidth > 810 ){
      this.breakpoint = 2;
      this.itemperPage = 6;
      this.pagerService.getPager(200,1,6);
    }
    else if(window.innerWidth > 1200){
      this.breakpoint = 3;
      this.itemperPage = 9;
      this.pagerService.getPager(200,1,9);
    }
  }
  onResize(event) {
    if(event.target.innerWidth <= 810){
      this.breakpoint = 1;
      this.itemperPage = 5;
      this.pagerService.getPager(200).pageSize = 5;
    }
    else if(event.target.innerWidth <= 1200 && event.target.innerWidth > 810 ){
      this.breakpoint = 2;
      this.itemperPage = 6;
      this.pagerService.getPager(200).pageSize = 6;
    }
    else if(event.target.innerWidth > 1200){
      this.breakpoint = 3;
      this.itemperPage = 9;
      this.pagerService.getPager(200).pageSize = 9;
    }
  }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.Product.length, page, this.itemperPage);

    // get current page of items
    this.pagedItems = this.Product.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  detail(id){
    console.log(id)
    localStorage.setItem('id',id);
    this.router.navigate([this.localize.translateRoute('/detailproduct')])
  }
  favorite(id){
    

    for(let i = -1; i < this.Id.length; i++){
      console.log(id);
      if(this.Id.length == 0){
        this.Id.push(id);
        console.log(this.Id)
        // console.log("true")
        return this.Id;
      }
      else if(id !== this.Id[i]){
        this.Id.push(id);
        console.log('1')
      }
      // else{
      //   this.Id.push(id);
      // }
    }
    console.log(this.Id)
    // this.productId = this.Id.toString();
    // localStorage.setItem('favorite',this.productId);
  }
}
