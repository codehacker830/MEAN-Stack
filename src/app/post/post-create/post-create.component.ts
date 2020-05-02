
import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
    
    @Output() postCreated = new EventEmitter<Post>();
    enteredTitle = "";
    enteredContent = "";
    onAddPost(form: NgForm) {
        console.log("__", form)
        if(form.invalid) {
            return;
        }
         const post:Post = {
            title: form.value.title,
            content: form.value.content
        };
        this.postCreated.emit(post);
    }
}