const axios = require('axios');
const cheerio = require('cheerio');
const dotenv = require('dotenv');
dotenv.config();
const url = process.env.SCRAPPER_URL

class ScrappingController {

    async ScrapCategories(req, res) {
        try {
            const { data } = await axios.get(url);

            const $ = cheerio.load(data);

            const titles = [];
            $('div.collection-grid-item__title').each((index, element) => {
                titles.push($(element).text().trim());
            });

            res.status(200).send({ titles });
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: 'Internal Server Error' });
        }
    }
}

module.exports = ScrappingController;