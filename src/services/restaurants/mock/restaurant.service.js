import { mocks } from "./index";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("No mock for this location");
    }
    resolve(mock);
  });
};

restaurantsRequest()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
