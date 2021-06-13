// convert html string into text
export const parseHTML = text => {
  return text.replace(/(<([^>]+)>)/g, '');
};
