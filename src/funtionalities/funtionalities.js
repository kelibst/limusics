

const getThumbNail = filename => {
    let res =  (/[a-zA-Z]/).test(filename[0]) ?  filename[0] : "U"
    return res
  } 
  const autoGenHex = () => {
    const hexNum = Math.floor(Math.random()*16777215).toString(16);
    return {backgroundColor: "#" + hexNum}
  }
  
  const convertMinsToHrsMins = (mins) => {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    return `${h}:${m}`;
  }

  export { getThumbNail, autoGenHex, convertMinsToHrsMins}