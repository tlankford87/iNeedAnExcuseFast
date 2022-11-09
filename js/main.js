//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getChoice(){
  choice = document.getElementById('categories').value
  return choice
}


function getFetch(){
  
  let choice = getChoice()
  console.log(choice)
  

  if(choice = 'random'){
    url = `https://excuser.herokuapp.com/v1/excuse`
  }else if(choice != 'random'){
    url = `https://excuser.herokuapp.com/v1/excuse/${choice}`
  }
  
  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data[0].category)
        const excuse = document.getElementById('excuse')
        excuse.textContent = data[0].excuse
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

