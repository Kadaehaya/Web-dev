import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../services/album';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrl: './albums.css'
})
export class Albums implements OnInit {
  private albumService = inject(AlbumService);

  albums: Album[] = [];
  loading = true;
  error = '';

  ngOnInit(): void {
    console.log('Albums page loaded');

    this.albumService.getAlbums().subscribe({
      next: (data) => {
        console.log('Albums data:', data);
        this.albums = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Albums error:', err);
        this.error = 'Failed to load albums';
        this.loading = false;
      }
    });
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter(album => album.id !== id);
      },
      error: (err) => console.error(err)
    });
  }
}