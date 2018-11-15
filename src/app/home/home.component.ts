import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  blogs = [];
  comments = [];

  ngOnInit() {
    this.blogs = JSON.parse(localStorage.getItem("blogs"))
    this.comments = JSON.parse(localStorage.getItem("comments"))
  }

  removeBlog(blog){
    let index = this.blogs.indexOf(blog);
    this.blogs.splice(index, 1)
    localStorage.setItem("blogs", JSON.stringify(this.blogs))
    alert("Blog Has Been Deleted")
  }

}
