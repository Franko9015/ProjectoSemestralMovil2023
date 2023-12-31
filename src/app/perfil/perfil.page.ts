import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  username: string = '';

  constructor(private route: ActivatedRoute) { 
    this.username = this.route.snapshot.paramMap.get('username') ?? '';
  }

  ngOnInit() {
  }

}
