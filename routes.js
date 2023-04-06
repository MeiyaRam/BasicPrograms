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
    {
        start: "chennai",
        end: "tirunelveli",
        stops: ["chennai", "trichy", "tirunelveli"],
    }
];

const getRouteDistanceFromRoutes = (start, end) => {
    const findStops = (routes.find((route) =>
        (route.start === start && route.end == end)) || { stops: 0 }).stops;

    return {
        distance: findStops ? getTotalDistance(findStops) : 0
    }
}

const getDistance = (stop, index, array) => (distances.find((distance) =>
    distance.start === stop && distance.end === array[index + 1])
    || getRouteDistanceFromRoutes(stop, array[index + 1])).distance;


const getTotalDistance = (stops) => {
    const routeDistances = stops.map(getDistance);
    const totalDistance = routeDistances.reduce((acc, cur) => acc + cur);


    return totalDistance;
}

const getRouteDistances = (route) => ({
    ...route,
    totalDistance: getTotalDistance(route.stops),
});

const totalDistances = routes.map(getRouteDistances);

const main = () => console.log(totalDistances);

main();