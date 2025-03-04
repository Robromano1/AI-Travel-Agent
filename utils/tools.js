export const getWeather = async (location) => {
  const geo = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
  );
  console.log(await geo.json());
};

const getHotel = async (location) => {
  return {
    name: "Marriot Bonvoy",
    averagePrice: "200 per night",
  };
};

export const functions = [
  {
    type: "function",
    function: {
      function: getWeather,
      parameters: {
        type: "object",
        properties: {
          location: {
            type: "string",
            description: "The name of the location to get the weather from.",
          },
        },
        required: ["location"],
      },
      parse: JSON.parse,
    },
  },
  {
    type: "function",
    function: {
      function: getHotel,
      parameters: {
        type: "object",
        properties: {
          location: {
            type: "string",
            description:
              "The name of the hotel of the destination city and the price per night.",
          },
        },
        required: ["location"],
      },
      parse: JSON.parse,
    },
  },
];
