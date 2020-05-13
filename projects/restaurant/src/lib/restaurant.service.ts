import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurants: Restaurant[]
  
  constructor() { 
    this.restaurants = [
      new Restaurant(
        "Brazil, Brazil!",
        "Rodizio",
        "This Brazilian BBQ place serves 20 different kinds of meat."
      ),
      new Restaurant(
        "Fuki Sushi",
        "Sushi",
        "The fish is always fresh here. Try the chef specials."
      ),
      new Restaurant(
        "La Tosca",
        "Tapas",
        `In a trendy location on the square. It's like an evening stroll in 
         Barcelona! Open late.`
      ),
     new Restaurant(
       "Joes Bait Shop",
       "Sushi",
       "Who thought this was a good idea?"
      )
    ]

  }

  
public getAllRestaurants = (): Restaurant[] => this.restaurants

public getRestaurantByIndex = (index: number): Restaurant =>  
                                                      this.restaurants[index]

}
