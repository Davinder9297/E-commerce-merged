export const cropString = (str, num) => {
    // console.log(str);
    var newstr;
    if (str.length > num) {
      if (window.innerWidth > 700) {
        newstr = str.slice(0, num + 10);
      } else {
        newstr = str.slice(0, num);
      }
      console.log(newstr);
      const result = newstr.concat("...");
  
      return result;
    } else return str;
  };