//Retun JSON format to BLOG
const fs = require('fs');

const getPublishedPosts = () => {
const filePath = './data/posts.json';
if (fs.existsSync(filePath)) {
const rawData = fs.readFileSync(filePath);
const posts = JSON.parse(rawData);
const publishedPosts = posts.filter(post => post.published === true);
return publishedPosts;
} else {
console.error(`Error: The file ${filePath} could not be found`);
}
};

//Return JSON format to POSTS
function getAllPosts() {
  return JSON.parse(fs.readFileSync('./data/posts.json'));
}

//Return JSON format to Categories
function getAllCategories() {
    return JSON.parse(fs.readFileSync('./data/categories.json'));
}


//Global post and categories array type variable 
let posts = [];
let categories = [];

const readData = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(`./data/${fileName}.json`, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};

const init = async () => {
  try {
    posts = await readData('posts');
    categories = await readData('categories');
  } catch (err) {
    console.error(err);
  }
};

const getPosts = () => {
  return posts;
};

const getCategories = () => {
  return categories;
};



const initialize = () => {
return new Promise((resolve, reject) => {
fs.readFile("./data/posts.json", "utf8", (err, data) => {
if (err) {
reject("Unable to read posts file");
}
posts = JSON.parse(data);
fs.readFile("./data/categories.json", "utf8", (err, data) => {
if (err) {
reject("Unable to read categories file");
}
categories = JSON.parse(data);
resolve();
});
});
});
};


const getsAllPosts = () => {
  return new Promise((resolve, reject) => {
  if (posts.length === 0) {
  reject("No results returned");
  } else {
  resolve(posts);
  }
  });
  };


  const getPublishPosts = () => {
    return new Promise((resolve, reject) => {
    const publishedPosts = posts.filter(post => post.published === true);
    if (publishedPosts.length === 0) {
    reject("No results returned");
    } else {
    resolve(publishedPosts);
    }
    });
    };

    const get_Categories = () => {
      return new Promise((resolve, reject) => {
      if (categories.length === 0) {
      reject("No results returned");
      } else {
      resolve(categories);
      }
      });
      };

module.exports = {
  init,
  getPosts,
  getCategories,
  getAllPosts,
  getAllCategories,
  getPublishedPosts,
  initialize,
  getsAllPosts,
  getPublishPosts,
  get_Categories
};
