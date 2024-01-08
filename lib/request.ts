import type { NextApiRequest,NextApiResponse } from "next"

export function getOffseAndLimit(req: NextApiRequest, maxLimit, maxOffset) {
    const queryLimit = parseInt(req.query.limit as string)
    const queryOffset = parseInt(req.query.offset as string)
    const limit = queryLimit <= maxLimit ? queryLimit : maxLimit
    const offset = queryOffset < maxOffset? queryOffset : 0
    console.log("soy el offset",offset)
    return { limit, offset }
}