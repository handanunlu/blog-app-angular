import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor() { }

  comments = []

  ngOnInit() {
  }

  addComment(comment_by,content){
    let comment = { "comment_by": comment_by.value, "content": content.value };
    if (localStorage.getItem("comments")){
      this.comments = JSON.parse(localStorage.getItem("comments"))
    }
    this.comments.splice(0,0,comment)

    localStorage.setItem("comments",JSON.stringify(this.comments))
    comment_by.value = "";
    content.value = "";
    alert("Comment Submitted")
  }
}
