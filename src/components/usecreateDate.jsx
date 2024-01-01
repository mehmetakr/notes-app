const usecreateDate = () => {
  const dateobj = new Date();

  const month = dateobj.getMonth();
  let monthname;
  switch (month) {
    case 0:
      monthname = "Ocak";
      break;

    case 1:
      monthname = "Şubat";
      break;
    case 2:
      monthname = "Mart";
      break;

    case 3:
      monthname = "Nisan";
      break;
    case 4:
      monthname = "Mayıs";
      break;
    case 5:
      monthname = "Haziran";
      break;
    case 6:
      monthname = "Temmuz";
      break;
    case 7:
      monthname = "Ağustos";
      break;
    case 8:
      monthname = "Eylül";
      break;
    case 9:
      monthname = "Ekim";
      break;
    case 10:
      monthname = "Kasım";
      break;
    case 11:
      monthname = "Aralık";
      break;

  }

  const date =`${monthname} ${dateobj.getDate()} , ${dateobj.getFullYear()} , [${dateobj.getHours()} :${dateobj.getMinutes()}] `
   
  return date;
};
export default usecreateDate;
