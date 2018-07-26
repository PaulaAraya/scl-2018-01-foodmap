/* https://places.cit.api.here.com/places/v1/discover/explore?app_id=O9DoY7KRd4GikQwomU1T&app_code=_60riwD55GvOAy7LjosEhw

https://places.cit.api.here.com/places/v1/discover/search?app_id=O9DoY7KRd4GikQwomU1T&app_code=_60riwD55GvOAy7LjosEhw
*/
const printList = document.getElementById("printList")

const locality = `https://places.cit.api.here.com/places/v1/discover/explore?app_id=O9DoY7KRd4GikQwomU1T&app_code=_60riwD55GvOAy7LjosEhw&at=-33.4188226,-70.6422839&pretty
`
fetch(locality)
.then(response => response.json())
.then( discover => {
  console.log(discover);
  printInfo(discover);
});

const printInfo = (discover) => {
  printList.innerHTML += `${JSON.stringify
    (discover.results.items[0].title)}`
};




