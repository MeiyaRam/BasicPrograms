const distances = [
  {
      start: "chennai",
      end: "viluppuram",
      distance: 166,
  },
  {
      start: "viluppuram",
      end: "trichy",
      distance: 165,
  },
  {
      start: "trichy",
      end: "madurai",
      distance: 138,
  },
  {
      start: "madurai",
      end: "tirunelveli",
      distance: 171,
  },
  {
      start: "tirunelveli",
      end: "kanyakumari",
      distance: 85,
  },
  {
      start: "karur",
      end: "trichy",
      distance: 83,
  }
];
const routes = [
  {
      start: "chennai",
      end: "trichy",
      stops: ["chennai", "viluppuram", "trichy"],
  },
  {
      start: "chennai",
      end: "madurai",
      stops: ["chennai", "viluppuram", "trichy", "madurai"],
  },
  {
      start: "trichy",
      end: "tirunelveli",
      stops: ["trichy", "madurai", "tirunelveli"],
  },
  {
      start: "karur",
      end: "madurai",
      stops: ["karur", "trichy", "madurai"],

  },
];

const getFromDistanceBetween = (stops) => {
  const routeDistance = stops.map((stop, index, array) =>
      (distances.find((distance) =>
      distance.start === stop && distance.end === array[index + 1]) ||{distance : 0}).distance);
  const totalDistance = routeDistance.reduce((acc, cur) => acc + cur);

  
  return totalDistance;
}

const getRouteDistance = (route) => ({
  ...route,
  totalDistance: getFromDistanceBetween(route.stops),
});

const totalDistances = routes.map(getRouteDistance);

const main = () => console.log(totalDistances);

main();