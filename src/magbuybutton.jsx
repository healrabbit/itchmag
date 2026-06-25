import React, { useEffect, useRef } from 'react';
// Import the native library right from your node_modules
import ShopifyBuy from '@shopify/buy-button-js';

const ShopifyBuyButton = () => {
      const initialized = useRef(false);
  useEffect(() => {
      if (initialized.current) return;
    initialized.current = true;
    const componentId = 'product-component-1779902569838';

  
    const renderButton = () => {
      const targetNode = document.getElementById(componentId);
      
    
      if (!targetNode) {
        setTimeout(renderButton, 20);
        return;
      }

      try {
    
        const client = ShopifyBuy.buildClient({
          domain: 'tkk10y-r1.myshopify.com',
          storefrontAccessToken: 'c9e9109b4afc8049130007177bb5cbe6',
        });

      
        const ui = ShopifyBuy.UI.init(client);
        
        targetNode.innerHTML = '';

ui.createComponent('product', {
  id: '9329158226108',
  node: targetNode,
  moneyFormat: '%24%7B%7Bamount%7D%7D',
  options: {
    product: {
      styles: {
        product: {
          '@media (min-width: 601px)': {
            'max-width': 'calc(25% - 20px)',
            'margin-left': '20px',
            'margin-bottom': '50px',
          },
        },
        button: {
          'font-family': 'Lato, sans-serif',
          'font-weight': 'normal',
          'background-color': '#000000',
          ':hover': {
            'background-color': '#444444',
          },
          ':focus': {
            'background-color': '#2b2b2b',
          },
          'border-radius': '0px',
          'padding-left': '81px',
          'padding-right': '81px',
        },
      },
      contents: {
        img: true,
        title: true,
        price: true,
      },
      text: {
        button: 'ADD TO CART',
      },
      googleFonts: ['Helvetica'],
    },

    productSet: {
      styles: {
        products: {
          '@media (min-width: 601px)': {
            'margin-left': '-20px',
          },
        },
      },
    },

    modalProduct: {
      contents: {
        img: false,
        imgWithCarousel: true,
        button: false,
        buttonWithQuantity: true,
      },
      styles: {
          title: {
          'color': '#000000', 
        }, 
        price: {
          'color': '#000000', 
        },
        product: {
          '@media (min-width: 601px)': {
            'max-width': '100%',
            'margin-left': '0px',
            'margin-bottom': '0px',
          },
        },
        button: {
          'font-family': 'Lato, sans-serif',
          'font-weight': 'normal',
          'background-color': '#000000',
          ':hover': {
            'background-color': '#444444',
          },
          ':focus': {
            'background-color': '#2b2b2b',
          },
          'border-radius': '0px',
          'padding-left': '81px',
          'padding-right': '81px',
        },
      },
      googleFonts: ['Helvetica'],
      text: {
        button: 'ADD TO CART',
      },
    },

    option: {},

    cart: {
      styles: {
        button: {
          'font-family': 'Helvetica, sans-serif',
          'font-weight': 'normal',
          'background-color': '#000000',
          ':hover': {
            'background-color': '#444444',
          },
          ':focus': {
            'background-color': '#2b2b2b',
          },
          'border-radius': '0px',
        },
      },
      text: {
        total: 'Subtotal',
        notice: 'Shipping is added at checkout.',
        button: 'CHECKOUT',
      },
      googleFonts: ['Helvetica'],
    },

    toggle: {
      styles: {
        toggle: {
          'font-family': 'Helvetica, sans-serif',
          'font-weight': 'normal',
          'background-color': '#000000',
          ':hover': {
            'background-color': '#444444',
          },
          ':focus': {
            'background-color': '#2b2b2b',
          },
        },
      },
      googleFonts: ['Helvetica'],
    },
  },
});
      } catch (err) {
        console.error("Shopify Initialization Error: ", err);
      }
    };

    renderButton();
  }, []);

  return (
    <div 
      id="product-component-1779902569838"  
      
    />
  );
};

export default ShopifyBuyButton;
