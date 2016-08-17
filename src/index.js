// async function
async function fetchAsync () {
  // await response of fetch call
  let response = await fetch('https://api.github.com');
  // only proceed once promise is resolved
  let data = await response.json();
  // only proceed once second promise is resolved
  return data;
}

// btn
var output = document.getElementById('output')
var btn = document.getElementById('btn')
btn.addEventListener('click', (event) => {
  event.preventDefault()
  output.innerHTML = 'fetching..'
  // trigger async function
  // log response or catch error of fetch promise
  fetchAsync()
      .then(data => {
        console.log(data)
        output.innerHTML = JSON.stringify(data, undefined, 2)
      })
      .catch(reason => {
        console.log(reason)
        output.innerHTML = JSON.stringify(reason.message, undefined, 2)
      })
})
