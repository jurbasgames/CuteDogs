import api from "../../services/api"

function data() {
  api.get('/images/search?limit=10').then(function (response) {
    console.log(response);
    return(response.data)
  })
  .catch(function (error) {
    console.log(error);
    return(error)
  })
}

export default data