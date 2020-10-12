const path = require(`path`)
const products = require('./src/data/data.json');
const IMAGE_PATH = './src/images/';

// https://freddydumont.com/blog/how-to-source-images-and-data-from-json-files-in-gatsby
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  products.product.forEach((card) => {
    // Extract the card data from the original json
    const {
      boardName,
      category,
      subCategory,
      availability,
      price,
      details,
      image
    } = card;

    // name, extension and absolute path are required to build a File node
    const { name, ext } = path.parse(image);
    const absolutePath = path.resolve(__dirname, IMAGE_PATH, image);

    // Build a data shape that corresponds to a File node that Sharp can process
    const data = {
      name,
      ext,
      absolutePath, // required
      extension: ext.substring(1), // required, remove the dot in `ext`
    };

    // Build the image node using our data
    const imageNode = {
      ...data,
      id: createNodeId(`card-image-${name}`),
      internal: {
        type: 'ProductCardImage',
        contentDigest: createContentDigest(data),
      },
    };

    // Create the node. When imageNode is created, Sharp adds childImageSharp to the node
    actions.createNode(imageNode);

    // Build the ProductCard node. Note that most fields simply correspond to our JSON data.
    const node = {
      id: createNodeId(`card-${name}`),
      boardName,
      category,
      subCategory,
      availability,
      price,
      details,
      image: imageNode,
      internal: {
        type: 'ProductCard',
        contentDigest: createContentDigest(card),
      },
      slug: boardName.replace(/\s+/g, '-').toLowerCase(),
      subCategorySlug: subCategory.replace(/\s+/g, '-').toLowerCase(),
      url: (subCategory +'/'+ boardName).replace(/\s+/g, '-').replace('#', '').toLowerCase(),
    };
    
    // 3. Create the node
    actions.createNode(node);
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allProductCard {
        edges {
          node {
            url
            subCategorySlug
          }
        }
      }
    }  
  `)
  
  result.data.allProductCard.edges.forEach(({ node }) => {
    createPage({
      path: 'shop/' + node.url,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        url: node.url
      },
    })
    createPage({
      path: 'shop/' + node.subCategorySlug,
      component: path.resolve(`./src/templates/category.js`),
      context: {
        subCategorySlug: node.subCategorySlug
      },
    })
  })
}