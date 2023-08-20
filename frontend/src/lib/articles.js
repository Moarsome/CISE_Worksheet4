import clientPromise from "./dbConfig";

let articles;
let client;

async function init() {
   try {
       client = await clientPromise;
       const db = await client.db("myFirstDatabase");
       articles = await db.collection("articles");
           
       //res.json(articles);
   } catch (e) {
       console.error(e);
   }
}

;(async () => {
    await init()
})()

export async function getArticles() {
    try {
        if (!articles) await init()
        const result = await articles
            .find({})
            .limit(10)
            .toArray();
        return {articles: result}
    } catch(error){
        return {error : 'Failed to fetch articles!'}
    }
}

export async function addArticle(article)
{
    try {
        if (!articles) await init()
        console.log("Successfully added article")
        const response = await articles.insertOne(article)
        return { response }
    } catch(error){
        console.log("Failed to add")
        return {error:error.message}
    }
}