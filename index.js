const scrapboxProjectName = process.env.SCRAPBOX_PROJECT_NAME;

let getUrl = () => {
  const date = new Date();
  const yearStr = date.getFullYear().toString();
  const monthStr = (date.getMonth() + 1).toString().padStart(2, '0');
  const dateStr = date.getDate().toString().padStart(2, '0');

  const formattedDate = yearStr + "-" + monthStr + "-" + dateStr;
  return `https://scrapbox.io/${scrapboxProjectName}/${formattedDate}`;
};

exports.handler = async function (event, context, callback) {
  return await getUrl();
};
