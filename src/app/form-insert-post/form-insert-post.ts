import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogPost, Blog,Blogger } from '../model/entities';
import { BlogPostService } from '../blog-post-service';

@Component({
  selector: 'app-form-insert-post',
  imports: [FormsModule],
  templateUrl: './form-insert-post.html',
  styleUrl: './form-insert-post.css',
})
export class FormInsertPost {

  blogPostService = inject(BlogPostService);

  post: BlogPost = {
    id: 0,
    title: '',
    tags: '',
    content: '',
    date: '',
    blog: {
      id: 0,
      title: '',
      description: '',
      blogger: {
        id: 0,
        nickname: '',
        bio: '',
      }
    }
  };

  errorMessage = signal<string>('');
  successMessage = signal<string>('');

  normalizeTags(): void{
    //divide i tag, rimuove spazi, uniforma le maiuscole e rimuove i duplicati
    let uniqueTags = 
    new Set(
    this.post.tags
      .split(',')
      .map(tag => tag.trim().toLowerCase())
      .filter(tag => tag.length > 0)
    );
    //ricostruisce la stringa dei tag senza duplicati
    this.post.tags = Array.from(uniqueTags).join(', ');
  }
  
  //validazione dei campi e invio del post al service
  savePost(): void {
    this.errorMessage.set('');
    this.successMessage.set('');
    this.normalizeTags();

    if(!this.post.title.trim() || !this.post.content.trim() ||!this.post.tags.trim()){
      this.errorMessage.set('Titolo, contenuto e tag sono obbligatori.');
      return;
    }

    this.post.date = new Date().toISOString();
    console.log('Post pronto da inviare al service:', this.post);


    this.successMessage.set('Post salvato con successo!');
  }
}
