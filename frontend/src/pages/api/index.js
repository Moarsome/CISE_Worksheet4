import { addArticle, getArticles } from '../../lib/articles'

const handler = async (req, res) => {
    if (req.method == 'GET'){
    {
        try {
            const {articles, error} = await getArticles()
            if (error) throw new Error(error)

            return res.status(200).json({ articles })
        } catch(error){
            return res.status(500).json({error:error.message})
        }
        }
    } else if (req.method == 'POST')
    {
      try {
      const response = await addArticle(req.body)
      return res.status(200).json({ response })
      } catch(error){
        return res.status(500).json({error:error.message})
      }
    }

    res.setHeader('Allow', ['GET'])
    res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
