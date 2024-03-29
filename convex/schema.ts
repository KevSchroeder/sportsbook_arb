import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    odds: defineTable({
        away_team: v.string(),
        bookmakers: v.array(
        v.object({
            key: v.string(),
            last_update: v.string(),
            markets: v.array(
                v.object({
                    key: v.string(),
                    last_update: v.string(),
                    outcomes: v.array(
                v.object({
                    name: v.string(),
                    price: v.float64(),
                    })
                ),
            })
        ),
        title: v.string(),
        })
    ),
    commence_time: v.string(),
        home_team: v.string(),
        id: v.string(),
        sport_key: v.string(),
        sport_title: v.string(),
    }),
});