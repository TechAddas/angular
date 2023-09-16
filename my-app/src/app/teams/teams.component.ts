import { Component } from '@angular/core';
import { Teams } from '../teams';
import { Teams_list } from '../mock-teams';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {

  public teams_list = Teams_list
  public teams:Teams ={
    id:1,
    name:"DevOps"
  }

  public selectedTeams?: Teams;

  onSelect(teams: Teams): void {
  this.selectedTeams = teams;
}
}
