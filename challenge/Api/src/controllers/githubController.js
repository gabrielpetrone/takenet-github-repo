const axios = require('axios');
const baseURL = `https://api.github.com/orgs/takenet/repos`;

exports.takenetgh = async (req, res) => {
   return new Promise(async(resolve, reject) => {
      try {
         var response = await axios.get(baseURL, {params:{"language": "C#", "sort": "created","direction": "asc", "per_page": 5}});
         let listRepo = [];
         let dataRepo = response.data;
         for (let i in dataRepo) {
            listRepo.push(
               [
                  {
                  "full_name": dataRepo[i].full_name,
                  "avatar_url": dataRepo[i].owner.avatar_url,
                  "description": dataRepo[i].description
                  }
               ]
            );
         }
         resolve(listRepo);
      } catch (error) {
         console.log(error);
         reject(error);
      }

   });

};