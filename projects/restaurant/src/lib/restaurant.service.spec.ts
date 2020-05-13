import { TestBed } from '@angular/core/testing';

import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant';

describe('RestaurantService', () => {
  let service: RestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have 4 restaurants', () => {
    let restaurants: Restaurant[] = service.getAllRestaurants()
    expect(restaurants.length).toBe(4);
  });

  it(`should have 'Joes Bait Shop' last`, () => {
    let restaurants: Restaurant[] = service.getAllRestaurants()
    expect(restaurants[3].name).toBe('Joes Bait Shop');
  });


});
