import { fakeMyListings } from "./fake-data";

export const getMyListingsRoute = {
  method: "GET",
  path: "/api/my-listings",
  handler: (req, h) => {
    return fakeMyListings;
  },
};
