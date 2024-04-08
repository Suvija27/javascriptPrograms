const distances = [
  {
    start: 'chennai',
    end: 'villupuram',
    distance: 166,
  },
  {
    start: 'villupuram',
    end: 'trichy',
    distance: 165,
  },
  {
    start: 'trichy',
    end: 'madurai',
    distance: 138,
  },
  {
    start: 'madurai',
    end: 'thirunelvelli',
    distance: 171,
  },
  {
    start: 'thirunelvelli',
    end: 'kanyakumari',
    distance: 85,

  },
  {
    start: 'trichy',
    end: 'karur',
    distance: 83,
  },
];

const routes = [
  {
    start: 'chennai',
    end: 'trichy',
    stops: ['chennai', 'villupuram', 'trichy'],
  },
  {
    start: 'chennai',
    end: 'karur',
    stops: ['chennai', 'villupuram', 'trichy', 'karur'],
  },
  {
    start: 'trichy',
    end: 'thirunelvelli',
    stops: ['trichy', 'madurai', 'thirunelvelli'],
  },
];
// const getStopsList =(stops) => stops.map((element,index,array) => ({start: element , end: array[index+1] || 0 }));
// console.log(getStopsList (routes[1].stops));

const getStopsList =(stops) => stops.map((start,index,array) =>
 (distances.find((place) => place.start === start && place.end=== array[index+1]) || 0).distance || 0) ;
console.log(getStopsList (routes[1].stops));

const getTotalDistance = (stops) => {
  const totalDistance = getStopsList(stops).reduce((acc,cv) => acc +cv ,0);
  return totalDistance;
}
// console.log(getTotalDistance(routes[1].stops));
  
const getRouteDetails =(route) => ({
   start :route.start ,
    end : route.end , 
    stops :route.stops,
    distance : getTotalDistance(route.stops),
  });
  


const main = () => {
  const routeDetails = routes.map(getRouteDetails);
  console.log(routeDetails);
};
main();




