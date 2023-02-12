module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      date=new Date(date);
      return date.toLocaleDateString();
    },
    format_amount: (amount) => {
      // format large numbers with commas
      return parseInt(amount).toLocaleString();
    },
};