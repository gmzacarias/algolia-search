import "dotenv/config"
import algoliasearch from "algoliasearch"

const adminApiKey = process.env.ADMIN_API_KEY
const client = algoliasearch("LOQCIG58G8", `${adminApiKey}`);
export const productIndex = client.initIndex("products");