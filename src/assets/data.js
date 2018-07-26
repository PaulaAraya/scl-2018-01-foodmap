/* https://places.cit.api.here.com/places/v1/discover/explore?app_id=O9DoY7KRd4GikQwomU1T&app_code=_60riwD55GvOAy7LjosEhw

https://places.cit.api.here.com/places/v1/discover/search?app_id=O9DoY7KRd4GikQwomU1T&app_code=_60riwD55GvOAy7LjosEhw
*/


fetch(`https://places.cit.api.here.com/places/v1/discover/explore?app_id=O9DoY7KRd4GikQwomU1T&app_code=_60riwD55GvOAy7LjosEhw&at${position}&pretty
`)
.then(response => response.json())
.then(data => {
  console.log(data);
});
//

