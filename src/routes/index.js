import { addViewToListingRoute } from "./addViewToListing";
import { createNewListingRoute } from "./createNewListing";
import { getAllListingsRoute } from "./getAllListings";
import { getListing } from "./getListing";
import { getMyListingsRoute } from "./getMyListings";
import { getUserListingsRoute } from "./getUserListing";

export default [
  getAllListingsRoute,
  getMyListingsRoute,
  getListing,
  addViewToListingRoute,
  getUserListingsRoute,
  createNewListingRoute,
];
