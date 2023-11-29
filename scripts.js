/*
 * Javascript utilities to call directly.
*/

const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

function getType(p) {
  if (Array.isArray(p)) return 'array';
  else if (typeof p == 'string') return 'string';
  else if (p != null && typeof p == 'object') return 'object';
  else return 'other';
}

function formatNumbers(jobj){
  if (jobj === null || getType(jobj) != 'object'){
    return;
  }
  Object.keys(jobj).forEach(
    function(key) {
      let ty = getType(jobj[key]);
      if ( ty === 'object'){
        let myobj = jobj[key];
        if ( jobj[key].hasOwnProperty('$numberDecimal') )   { jobj[key] = Number(myobj['$numberDecimal']); }
        else if ( jobj[key].hasOwnProperty('$numberLong') ) { jobj[key] = Number(myobj['$numberLong']); }
        else if ( jobj[key].hasOwnProperty('$numberInt') )  { jobj[key] = Number(myobj['$numberInt']); }
        else {
          formatNumbers(jobj[key]);
        }
      }
      if ( ty === 'array'){
        for (let i=0; i< jobj[key].length; i++){
          let element = jobj[key][i];
          if (element === null) {continue;}
          if ( element.hasOwnProperty('$numberInt') )  { jobj[key][i] = Number(element['$numberInt']); }
          else if ( element.hasOwnProperty('$numberLong') ) { jobj[key][i] = Number(element['$numberLong']); }
          else if ( element.hasOwnProperty('$numberDecimal') )   { jobj[key][i] = Number(element['$numberDecimal']); }
        }
      }
      ty = getType(jobj[key]);
      if ( ty === 'array'){
        jobj[key].forEach(element => {
          formatNumbers(element);
        });
      }
    }
  );
}

function trimTimeInObj(jobj,_key){
  // console.log("trim time called");
  if ( jobj.hasOwnProperty(_key) ){ jobj[_key] = jobj[_key].substr(0,10); return;}
  if ( getType(jobj) != 'object' ){ return; }
  Object.keys(jobj).forEach(
    function(key) {
      let ty = getType(jobj[key]);
      if ( ty === 'string'){
        // console.log("string type: ", key);
        if ( key == _key ) { jobj[key] = jobj[key].substring(0,10); }
      }
      if ( ty === 'object'){
        Object.keys(jobj[key]).forEach( element => { trimTimeInObj(element, _key);} );
        // let myobj = jobj[key];
        // // console.log(myobj);
        // if ( myobj.hasOwnProperty(_key) )   { myobj[_key] = myobj[_key].substr(0,10); }
        // else {trimTimeInObj( jobj[key], _key); }
      }
      if ( ty === 'array'){
        jobj[key].forEach(element => {trimTimeInObj(element, _key);});
      }
    }
  )
  return jobj;
}

function dates2Strings(jobj){
  // console.log("Date2String Called: ", jobj);
  if (getType(jobj) != 'object'){
    return;
  }
  Object.keys(jobj).forEach(
    function(key) {
      // let ob = jobj[key];
      // console.log("Key:", key, "Object :", ob);
      let ty = getType(jobj[key]);
      if ( ty === 'object'){
        dates2Strings(jobj[key]);
      }
      if ( ty === 'array'){
        jobj[key].forEach(element => {
          dates2Strings(element);
        });
      }
      if ('$date' === key){
        let dt = jobj[key];//'unknown'
        if ( 'object' === getType(jobj[key]) ){
          let njobj = jobj[key];
          dt = new Date(Number(njobj['$numberLong'])).toISOString();
        }
        jobj[key] = dt;
      }
    }
  );
  // if (jobj.hasOwnProperty('$date')){
  //   let dt = jobj['$date'];
  //   console.log("Date: ", dt);
  //   jboj = dt;
  // } 2022-03-08T11:44:02.303Z
}

function remove$Dates(jobj){
  if (getType(jobj) != 'object'){
    return;
  }
  Object.keys(jobj).forEach(
    function(key) {
      let ty = getType(jobj[key]);
      if ( ty === 'object'){
        ob = jobj[key];
        if (ob.hasOwnProperty('$date')){
          let dt = ob['$date'];
          dt = dt.substring(0,19);
          jobj[key] = dt;

        }
        else {
          remove$Dates(jobj[key]);
        }
      }
      if ( ty === 'array'){
        jobj[key].forEach(element => {
          remove$Dates(element);
        });
      }
    }
  );
}

function getValue(jobj, key){
  let _key = key.trim();
  let val='';
  Object.keys(jobj).every(
    function(k) {
      if (k == _key){
        // console.log("Found: ", k, jobj[k]);
        val = jobj[k];
        return false;
      }
      return true;
    }
  );
  return val;
}

function isLeapYear(year){
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

function doy2Date(yyddd){
  let yyyy = Number(yyddd.substr(0,2))+2000;
  let ddd = Number(yyddd.substr(2,3));
  var nday = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
  nday[1] = isLeapYear(yyyy) ? 29 : 28;
  let n=0;
  let mm=0;
  let dd=0;
  for (var i = 0; i < 12; i++) {
    n += nday[i];
    if ( ddd <= n ){ mm = i; dd = nday[i]-(n-ddd); break;}
  }
  return new Date(yyyy,mm,dd);
}

;
//# sourceMappingURL=scripts.js.map