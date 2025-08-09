import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Separator } from '../components/ui/separator';
import { Plus, Minus, X, ShoppingBag, ArrowLeft, CreditCard, Lock } from 'lucide-react';

const Cart = () => {
  const navigate = useNavigate();
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  const shippingCost = totalPrice > 99 ? 0 : 9.99;
  const tax = totalPrice * 0.08; // 8% tax
  const finalTotal = totalPrice + shippingCost + tax - discount;

  const applyPromoCode = () => {
    // Mock promo code logic
    const validCodes = {
      'SAVE10': totalPrice * 0.1,
      'WELCOME20': 20,
      'FREESHIP': shippingCost
    };

    if (validCodes[promoCode.toUpperCase()]) {
      setDiscount(validCodes[promoCode.toUpperCase()]);
      setPromoCode('');
    } else {
      alert('Invalid promo code');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Mock checkout process
    setTimeout(() => {
      alert('Order placed successfully! (This is a demo)');
      clearCart();
      navigate('/');
      setIsCheckingOut(false);
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-xl text-gray-600 mb-8">
              Looks like you haven't added any Apple Watches to your cart yet.
            </p>
            <Link to="/products">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4">
                Shop Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/products')}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-gray-600">{totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={`${item.id}-${item.selectedColor}`} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-6">
                    {/* Product Image */}
                    <Link to={`/product/${item.id}`} className="flex-shrink-0">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg hover:scale-105 transition-transform duration-200"
                      />
                    </Link>
                    
                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-semibold text-lg text-gray-900 hover:text-gray-700 transition-colors duration-200">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-gray-600 text-sm">{item.model}</p>
                      
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {item.selectedColor}
                        </Badge>
                        {item.originalPrice > item.price && (
                          <Badge className="bg-red-500 text-white text-xs">
                            Save ${item.originalPrice - item.price}
                          </Badge>
                        )}
                      </div>

                      {/* Price and Quantity */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-600">Qty:</span>
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity - 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            
                            <span className="px-3 py-1 font-medium text-sm">{item.quantity}</span>
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.selectedColor, item.quantity + 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="font-bold text-lg">{formatPrice(item.price * item.quantity)}</p>
                          <p className="text-sm text-gray-500">{formatPrice(item.price)} each</p>
                        </div>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.id, item.selectedColor)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 self-start"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Clear Cart */}
            <div className="text-right">
              <Button
                variant="outline"
                onClick={clearCart}
                className="text-red-500 border-red-500 hover:bg-red-50"
              >
                Clear Cart
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Promo Code */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Promo Code</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={applyPromoCode} variant="outline">
                    Apply
                  </Button>
                </div>
                <div className="text-xs text-gray-500">
                  Try: SAVE10, WELCOME20, or FREESHIP
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className={shippingCost === 0 ? 'text-green-600' : ''}>
                      {shippingCost === 0 ? 'FREE' : formatPrice(shippingCost)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>{formatPrice(tax)}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Discount</span>
                      <span>-{formatPrice(discount)}</span>
                    </div>
                  )}

                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{formatPrice(finalTotal)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full bg-black hover:bg-gray-800 text-white py-6 text-lg"
                  >
                    {isCheckingOut ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <>
                        <Lock className="w-5 h-5 mr-2" />
                        Secure Checkout
                      </>
                    )}
                  </Button>

                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <CreditCard className="w-4 h-4" />
                    <span>Secure payment with 256-bit SSL encryption</span>
                  </div>
                </div>

                <div className="text-xs text-gray-500 text-center">
                  Free shipping on orders over $99 • 30-day returns • 2-year warranty
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-3">We accept</p>
                  <div className="flex justify-center space-x-3">
                    {['Visa', 'MC', 'PayPal', 'Apple'].map((payment, index) => (
                      <div key={index} className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-600">{payment}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;