export class Pokemon{
  id : number;
  hp : number;
  cp : number;
  name : string;
  picture : string;
  types : string[];
  created : Date;


  constructor(
    name : string = "Enter a name ...",
    hp : number = 100,
    cp : number = 100,
    picture : string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    types : string[] = ['Normal'],
    created : Date = new Date()
  ){
    this.hp = hp;
    this.cp = cp;
    this.name = name;
    this.picture = picture;
    this.types = types;
    this.created = created;
  }  
}