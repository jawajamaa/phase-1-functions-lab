function distanceFromHqInBlocks(someValue) {
  if (someValue < 42) {
return (42-someValue);
  }
  else { 
    return (someValue-42);
  }
}

  function distanceFromHqInFeet(someValue) {
    if (someValue < 42) {
      return (42-someValue)*264;
        }
        else { 
          return (someValue-42)*264;
        }
      }

  function distanceTravelledInFeet(start, destination) {
    if (destination < start) {
      return (start-destination)*264;
        }
        else { 
          return (destination-start)*264;
        }
      }

  function calculatesFarePrice(start, destination) {
        if (distanceTravelledInFeet(start, destination) < 400) {
          return 0;
        }
        else if (distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return ((distanceTravelledInFeet(start, destination)-400)*0.02);
      }
      else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25;
      }
      else if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far';
      }
    }
