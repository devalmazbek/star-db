 export default class SwapiResources {
    __APIBASE = 'https://swapi.dev/api/';
  
  
    async getResources(url) {
      const request = await fetch(`${this.__APIBASE}${url}`);
    
      if(!request.ok) {
        throw new Error(`Could not get request to ${url}, we received ${request.status}`);
      }
    
      const data = await request.json();
      return data;
      
    };
  
    async getAllPeople() {
      const people = await this.getResources(`people/`);
      return people.results.map(this._tranformPerson);
    };
  
    async getPerson(id) {
      const person = await this.getResources(`people/${id}`);
      return this._tranformPerson(person);
    };
  
    async getAllPlanets() {
      const planets = await this.getResources(`planets/`);
      return planets.reaults.map(this._transformPlanet);
    };
  
    async getPlanet(id) {
      const planet = await this.getResources(`planets/${id}`);
      return this._transformPlanet(planet);
    };
  
    async getAllStartships() {
      const starships = await this.getResources(`starships/`);
      return starships.reaults.map(this._transformStartship);
    };
  
    async getStarship(id) {
      const startship = await this.getResources(`starships/${id}`);
      return this._transformStartship(startship);
    };


    _extractId(item) {
      const idRegExp = /\/([0-9])\/$/;
      return item.url.match(idRegExp)[1];
    }

    _transformPlanet(planet) {
      return {
          id: this._extractId(planet),
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter,
        };
    };

    _transformStartship(starship) {
      return{
        id: this._extractId(starship),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costIncredits: starship.costIncredits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCopacity: starship.cargoCopacity,
      };
    }

    _tranformPerson(person) {
      return {
        id: this._extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birthYear,
        eyeColor: person.eyeColor
      };
    }
  
  
  };
  
  
  // const swapi = new SwapiResources();
  
  
  // // swapi.getAllPeople().then((people) => {
  // //   people.forEach(person => {
  // //     console.log(person.name);
  // //   });
  // // })
  
  
  // swapi.getPerson(2).then((person) => {
  //   console.log(person);
  // });
  
  // swapi.getStarship(3).then((star) => {
  //   console.log(star);
  // });