import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../services/album';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './albums-detail.html',
  styleUrl: './albums-detail.css'
})
export class AlbumsDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private albumService = inject(AlbumService);
  private location = inject(Location);

  album!: Album;
  loading = true;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  save(): void {
    this.albumService.updateAlbum(this.album).subscribe({
      next: (updatedAlbum) => {
        this.album = updatedAlbum;
        alert('Album updated');
      },
      error: (err) => console.error(err)
    });
  }

  goBack(): void {
    this.location.back();
  }
}