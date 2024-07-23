export const formatDate = (date) => {
  if(!date){
    return "-"
  }
  const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const localeDate = new Date(date).toLocaleDateString('en-GB', dateOptions);
  const [day, month, year] = localeDate.split('/');

  const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
  const localeTime = new Date(date).toLocaleTimeString('en-GB', timeOptions);

  return `${day}-${month}-${year} ${localeTime}`;
}