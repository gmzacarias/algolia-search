import "dotenv/config"
import type { NextApiRequest, NextApiResponse } from "next";
import { getOffseAndLimit } from "lib/request"
import {productIndex} from "lib/algolia"

export default async function(req:NextApiRequest,res:NextApiResponse) {
const results = await productIndex.search(req.query.search as string)
res.send(results)

}