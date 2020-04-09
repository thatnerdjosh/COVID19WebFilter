import { Request, Response } from "express";
import { Area, FetchAreas, FilterArea } from "../models/area"
/**
 * GET /search
 * Fuzzy find for regions in Thailand.
 */
export const index = (request: Request, response: Response) => {
    FetchAreas().then((areas:Area[]) => {
        // TODO: Fix this, we shouldn't CORS allow all, just PoC for now
        // TODO: Backend fuzzy finding disabled, evaluate if we really want that feature
        response.setHeader("Access-Control-Allow-Origin", "*")
        response.json({"data": areas}).end()
    })
};