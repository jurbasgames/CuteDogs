import api from "../../services/api"

function apiResult() {
  api.get('/images/search?limit=10').then(function (response) {
    console.log('opaaaaaaaaaa')
  })
  .catch(function (error) {
    console.log(error)
  })
}

export default apiResult