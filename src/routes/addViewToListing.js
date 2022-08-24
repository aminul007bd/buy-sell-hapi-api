import { db } from "../database";

export const addViewToListingRoute = {
  method: "POST",
  path: "/api/listings/{id}/add-view",
  handler: async (req, h) => {
    const id = req.params.id;

    await db.query("UPDATE items SET views=views+1 where id=?", [id]);

    const { results } = await db.query("Select * from items where id=?", [id]);
    const updatedView = results[0];
    return updatedView;
  },
};
