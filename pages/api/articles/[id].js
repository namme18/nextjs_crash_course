import { articles } from '../../../data';

export default function handler(req, res) {
    const { id } = req.query;
    const filtered = articles.filter(article => id === article.id);

    if(filtered.length > 0){
        res.status(200).json(filtered[0])
    }else{
        res.status(404).json({meesage: `Article with the id of ${id} is not found`});
    }

}