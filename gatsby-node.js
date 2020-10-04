const path = require(`path`)
const products = require('./src/data/data.json');
const IMAGE_PATH = './src/images/';

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allDataJson {
        edges {
          node {
            slug
          }
        }
      }
    }  
  `)
  
  result.data.allDataJson.edges.forEach(({ node }) => {
    createPage({
      path: 'shop/' + node.slug,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}

// https://freddydumont.com/blog/how-to-source-images-and-data-from-json-files-in-gatsby
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  products.forEach((card) => {
    // 1. Extract the card data from the original json
    const {
      id,
      boardName,
      category,
      subCategory,
      slug,
      price,
      details,
      image
    } = card;


    // 1. name, extension and absolute path are required to build a File node
    const { name, ext } = path.parse(image);
    const absolutePath = path.resolve(__dirname, IMAGE_PATH, image);

    // 2. Build a data shape that corresponds to a File node that Sharp can process
    const data = {
      name,
      ext,
      absolutePath, // <-- required
      extension: ext.substring(1), // <-- required, remove the dot in `ext`
    };

    // 3. Build the image node using our data
    const imageNode = {
      ...data,
      id: createNodeId(`card-image-${name}`),
      internal: {
        type: 'ProductCardImage',
        contentDigest: createContentDigest(data),
      },
    };

    // 4. Create the node. When imageNode is created,
    //    Sharp adds childImageSharp to the node
    actions.createNode(imageNode);




    
    // 2. Build the PortfolioCard node. Note that most fields simply correspond to
    //    to our JSON data.
    const node = {
      id: createNodeId(`card-${slug}`),
      boardName,
      category,
      subCategory,
      slug,
      price,
      details,
      image: imageNode,
      internal: {
        type: 'ProductCard',
        contentDigest: createContentDigest(card),
      },
    };
    
    // 3. Create the node
    actions.createNode(node);
    



    

    



  });
};