import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_CART':
      return action.payload;
    
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id && item.selectedColor === action.payload.selectedColor);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && item.selectedColor === action.payload.selectedColor
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price
        };
      }

    case 'REMOVE_FROM_CART':
      const itemToRemove = state.items.find(item => item.id === action.payload.id && item.selectedColor === action.payload.selectedColor);
      return {
        ...state,
        items: state.items.filter(item => !(item.id === action.payload.id && item.selectedColor === action.payload.selectedColor)),
        totalItems: state.totalItems - itemToRemove.quantity,
        totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity)
      };

    case 'UPDATE_QUANTITY':
      const { id, selectedColor, quantity } = action.payload;
      const currentItem = state.items.find(item => item.id === id && item.selectedColor === selectedColor);
      const quantityDiff = quantity - currentItem.quantity;
      
      return {
        ...state,
        items: state.items.map(item =>
          item.id === id && item.selectedColor === selectedColor
            ? { ...item, quantity }
            : item
        ),
        totalItems: state.totalItems + quantityDiff,
        totalPrice: state.totalPrice + (currentItem.price * quantityDiff)
      };

    case 'CLEAR_CART':
      return {
        items: [],
        totalItems: 0,
        totalPrice: 0
      };

    default:
      return state;
  }
};

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('appleWatchCart');
    if (savedCart) {
      dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) });
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('appleWatchCart', JSON.stringify(cartState));
  }, [cartState]);

  const addToCart = (product, selectedColor = product.colors[0]) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, selectedColor }
    });
  };

  const removeFromCart = (id, selectedColor) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id, selectedColor }
    });
  };

  const updateQuantity = (id, selectedColor, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, selectedColor);
    } else {
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { id, selectedColor, quantity }
      });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{
      ...cartState,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};