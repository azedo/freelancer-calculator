// Shorten the string by set max number and add elipisis at the end
export function shortString(str, max) {
  if (str.length > max) {
    return `${str.substring(0, (max-3))}...`;
  } else {
    return str;
  }
}

// Count objects in array literal
export function objectLength(obj) {
  var result = 0;
  for(var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
    // or Object.prototype.hasOwnProperty.call(obj, prop)
      result++;
    }
  }
  return result;
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

// Format price
export function formatPrice(cents) {
  const browserLang = navigator.language || navigator.userLanguage;
  // Check for browser support for toLocaleString
  if (toLocaleStringSupportsLocales() === true) {
    return cents.toLocaleString(browserLang, { maximumFractionDigits: '2', minimumFractionDigits: '2' });
  } else {
    // If the browser doesn't support, use this formula below
    return `${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  }
}

// Randomize array
export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Slugify string
export function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

// Find projects in array by type
export function findProjectsByType(projects, type) {
  let projectsArr = [];

  if (projects) {
    Object.keys(projects).map(key => {
      if (projects[key][type] === true) {
        projectsArr.push(projects[key]);
      }
      return projectsArr;
    });
  }
  return projectsArr;
}

// Find projects in array by ID
export function findProjectsById(projects, id) {
  let projectsArr = [];

  if (projects) {
    Object.keys(projects).map(key => {
      if (projects[key].slug === id) {
        projectsArr.push(projects[key]);
      }
      return projectsArr;
    });
  }
  return projectsArr;
}

// Get depreciation assets that are stil valid
export function validateAssets(assets) {
  let assetsArr = [];

  if (assets) {
    Object.keys(assets).map(key => {
      if ((assets[key].bought * assets[key].lifespan) >= Date.now()) {
        assetsArr.push(assets[key]);
      }
      return assetsArr;
    });
  }
  return assetsArr;
}
