class SwapiResources {
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
      return people.results;
    };
  
    async getPerson(id) {
      const person = await this.getResources(`people/${id}`);
      return person;
    };
  
    async getAllPlanets() {
      const planets = await this.getResources(`planets/`);
      return planets;
    };
  
    async getPlanet(id) {
      const planet = await this.getResources(`planets/${id}`);
      return planet;
    };
  
    async getAllStartships() {
      const starships = await this.getResources(`starships/`);
      return starships;
    };
  
    async getStarship(id) {
      const startship = await this.getResources(`starships/${id}`);
      return startship;
    };
  
  
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