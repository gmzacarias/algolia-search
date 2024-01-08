import "dotenv/config"
import type { NextApiRequest, NextApiResponse } from "next";
import { getOffseAndLimit } from "lib/request"
import { table } from "console";


const baseId = process.env.AIRTABLE_BASEID
const tableName = process.env.AIRTABLE_TABLENAME
const token = process.env.AIRTABLE_TOKEN

async function authAirtable(token, offset, limit) {
    const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableName}?maxRecords=${limit}&pageSize=${offset}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }
    )
    console.log(token)
    const data = await response.json()
    const dataFilter=data.records
    const responseFinal = dataFilter.map(r=>{
        return {
            ...r.fields,
            id:r.id,
        }
    })
    return responseFinal

}

export default async function products(req: NextApiRequest, res: NextApiResponse) {
    const { offset, limit } = getOffseAndLimit(req, 100, 10000)
    try {
        const results = await authAirtable(token, limit, offset)
       
        res.send({
            results: results,
            pagination: {
                offset: offset,
                limit: limit,
                // total: lista.length,
            }
        })
    } catch (error) {
        console.error(error)
    }
}