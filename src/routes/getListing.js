import { fakeListings } from "./fake-data";
import Boom from "@hapi/boom";
import { db } from "../database";

export const getListing = {
  method: "GET",
  path: "/api/listing/{id}",
  handler: async (req, h) => {
    const id = req.params.id;
    const { results } = await db.query("Select * from items where id=?", [id]);
    if (!results[0])
      throw Boom.notFound(`Listing does not exist with id ${id}`);
    return results;
  },
};
