

var url = 'https://us18.api.mailchimp.com/3.0/lists/feca241d44/members';
var proxy = 'https://cors-anywhere.herokuapp.com/'
var data = {username: 'example'};
var APIKey = '8374cb02b668f16704871a2f9ad9bbda-us18';
var Buffer = `apikey:${APIKey}`;
async function consultarTal(){
    var respuesta = await fetch(proxy+url, {
        method: 'GET', // or 'PUT'
        //body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          //'Content-Type': 'application/json',
          //'Content-Type': ' multipart/form-data',
          //'accept': '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'es-419,es;q=0.9',
          'authorization': 'apikey 8374cb02b668f16704871a2f9ad9bbda-us18',
          'cache-control': 'no-cache',
          'content-type': 'application/x-www-form-urlencoded',

          //'Authorization': `Basic ${Buffer.toString('base64')}`,
          'Accept': 'application/json'
    }
      });
      respuesta = await respuesta.json()
      return respuesta
}
consultarTal().then((response) => {console.log('Success:', response)}).catch((error) => {console.log('Error:', error)});
