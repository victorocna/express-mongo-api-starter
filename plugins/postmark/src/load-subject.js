const loadSubject = (html) => {
  const subject = html.substring(
    html.lastIndexOf('<title>') + '<title>'.length,
    html.lastIndexOf('</title>')
  );
  if (!subject) {
    throw new Error('Subject cannot be determined from the given email template');
  }

  return subject;
};

module.exports = loadSubject;
