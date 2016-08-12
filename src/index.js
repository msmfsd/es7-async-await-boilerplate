// async await function
async function fetchAsync () {
  return await fetch('https://api.github.com')
      .then(response => {
        return response.json()
      })
}

// btn
var output = document.getElementById('output')
var btn = document.getElementById('btn')
btn.addEventListener('click', (event) => {
  event.preventDefault()
  output.innerHTML = 'fetching..'
  // trigger async fetch
  fetchAsync()
      .then(response => {
        console.log(response)
        output.innerHTML = JSON.stringify(response, undefined, 2)
      })
      .catch((reason) => {
        console.log(reason)
        output.innerHTML = JSON.stringify(reason, undefined, 2)
      })
})
