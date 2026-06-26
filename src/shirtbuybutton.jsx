import React, { useEffect, useRef } from 'react';
import ShopifyBuy from '@shopify/buy-button-js';

const ShopifyBuyButton = () => {
  const containerRef = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    
    const componentId = 'product-component-1779902718080';
    
    let observer = null;

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
        
        observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
              if (node.tagName === 'IFRAME' || (node.querySelector && node.querySelector('iframe'))) {
                const iframe = node.tagName === 'IFRAME' ? node : node.querySelector('iframe');
                if (iframe) {
                  iframe.style.setProperty('background', 'transparent', 'important');
                  iframe.style.setProperty('background-color', 'transparent', 'important');
                  iframe.setAttribute('allowtransparency', 'true');
                }
              }
            });
          });
        });

        if (containerRef.current) {
          observer.observe(containerRef.current, { childList: true, subtree: true });
        }
        
        targetNode.innerHTML = '';

        ui.createComponent('product', {
          id: '9329146527932',
          node: targetNode,
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            product: {
         
              styles: {
                title: {
                  'color': '#ffffff', 
                }, 
                price: {
                  'color': '#ffffff', 
                },
                product: {
                  'background-color': '#ffffff00',
                  '@media (min-width: 601px)': {
                    'background-color': '#ffffff00',
                    'max-width': 'calc(25% - 20px)',
                    'margin-left': '20px',
                    'margin-bottom': '50px',
                  },
                },
                layout: {
                  'background-color': 'transparent !important',
                  'background': 'transparent !important',
                },
                button: {
                  'font-family': 'Lato, sans-serif',
                  'font-weight': 'normal',
                  'background-color': '#ffffff', /* Changed to white background */
                  'color': '#000000',             /* Changed to black text */
                  ':hover': {
                    'background-color': '#e5e5e5',
                  },
                  ':focus': {
                    'background-color': '#cccccc',
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
                // =========================================================
                // CORRECTION: NEW TEMPLATE OVERRIDE FOR NON-IFRAME PRICING
                // =========================================================
                price: {
                  regular: '' /* This explicitly empties "regular price" phrase */
                }
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

            // =========================================================
            // CORRECTION: DROPDOWN OPTIONS GO HERE (UPDATED FROM YOUR EMPTY OBJECT)
            // =========================================================
            option: {
              styles: {
                select: {
                  'font-family': 'Lato, sans-serif',
                  'color': '#ffffff',             /* White dropdown text */
                  'background-color': '#000000',   /* Black background */
                  'border': '1px solid #ffffff',  /* Crisp white border line */
                  'border-radius': '0px',          /* Square edges */
                  'padding': '12px 20px',         /* Clean inner padding */
                  'margin-bottom': '15px',        /* Clearance space before button */
                  'font-size': '14px',
                  'width': '100%',                /* Spans wide to align elements */
                  ':focus': {
                    'outline': 'none',
                    'border-color': '#cccccc'
                  }
                },
                label: {
                  'color': '#ffffff',
                  'font-family': 'Lato, sans-serif',
                  'font-size': '12px',
                  'text-transform': 'uppercase',
                  'margin-bottom': '5px'
                }
              }
            },

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

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };

  }, []);

  return (
    <div 
      id="product-component-1779902718080"  
      ref={containerRef}
    />
  );
};

export default ShopifyBuyButton;
