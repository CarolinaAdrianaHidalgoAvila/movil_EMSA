import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../tutorial';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  videos: Tutorial[] = [];
  filteredVideos: Tutorial[] = [];
  searchTerm: string = '';

  constructor(private tutorialService: TutorialService) {}

  ngOnInit() {
    this.tutorialService.getAll().subscribe((data: Tutorial[]) => {
      this.videos = data;
      this.filteredVideos = data;
    });
  }

  filterVideos(event: any) {
    this.searchTerm = event.target.value;
    this.filteredVideos = this.videos.filter(video =>
      video.titulo.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
