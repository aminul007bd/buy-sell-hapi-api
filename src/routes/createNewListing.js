import { handler } from "@hapi/hapi/lib/cors";
import { v4 as uuid } from "uuid";
import { db } from "../database";

export const createNewListingRoute = {
  method: "POST",
  path: "/api/listings/",
  handler: async (req, h) => {
    const id = uuid();

    const { name = "", description = "", price = 0 } = req.payload;

    const userId = 2;
    const views = 0;

    await db.query(
      `Insert into items(id, name, description, price, user_id, views)
            VALUES(?, ?, ?, ?, ?, ?);`,
      [id, name, description, price, userId, views]
    );

    return { id, name, description, price, user_id: userId, views };
  },
};
