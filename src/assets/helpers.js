export function shortString(str, max) {
  if (str.length > max) {
    return `${str.substring(0, (max-3))}...`;
  } else {
    return str;
  }
}

// Check for toLocaleString support
function toLocaleStringSupportsLocales() {
  var number = 0;
  try {
    number.toLocaleString('i');
  } catch (e) {
    return e.name === 'RangeError';
  }
  return false;
}

export function formatPrice(cents) {
  const browserLang = navigator.language || navigator.userLanguage;
  // Check for browser support for toLocaleString
  if (toLocaleStringSupportsLocales() === true) {
    return cents.toLocaleString(browserLang, { minimumFractionDigits: '2' });
  } else {
    // If the browser doesn't support, use this formula below
    return `${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  }
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}
