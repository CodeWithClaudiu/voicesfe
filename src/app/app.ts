import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LastPosts } from './last-posts/last-posts';
import { BlogView } from "./blog-view/blog-view";
import { FormInsertPost } from './form-insert-post/form-insert-post';
import { BlogPostPreview } from "./blog-post-preview/blog-post-preview";

@Component({
  selector: 'app-root',
  imports: [LastPosts, BlogView, FormInsertPost, BlogPostPreview],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('voicesfe');
}
