{
     {
          {
               {
                    var sera = 'Será???'
                    console.log(sera)
                } 
            } 
        } 
    }
    console.log(sera)

    function teste() {
        var local = 123
        console.log(local) // dentro do escopo = certo
    }

    teste()
    console.log(local) // fora do escopo = erro
    



