export default new  class   Api  {

    getApisoal3(){
        let uri  = "https://ext.qlue.id/example/top_report"

        return fetch(uri,{
            method :"GET",
            headers :{
                    "Content-Type" :"application/json",
                    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicWx1ZWluIiwiaWF0IjoxNDk0Mzk5Njg1fQ.mG5wmoCwmchufTPloxI7AjZaeM_bwcpCEJpyUnCDrmk"
                }
        })
         .then(response => response.json())

    }


    getapisoalbonus(){
        let uri = "http://35.187.248.19/feeder/update/vFDlJkLMJ4RKjjqFs5yLO33T3tHvsqF7.json"
        return fetch(uri,{method :"GET"})
         .then(response => response.json())

    }



}