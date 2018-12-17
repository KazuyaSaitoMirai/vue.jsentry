var items = [
  {
    name: "鉛筆",
    price: 300,
    quantity: 4
  },
  {
    name: "ノート",
    price: 400,
    quantity: 1
  }
];

var vm = new Vue({
  el: "#app",
  data: {
    //dataプロパティ
    items: items
  },
  filters: {
    numberWithDelimiter: function(value) {
      if (!value) {
        return "0";
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
  },
  computed: {
    totalPrice: function() {
      return this.items.reduce(function(sum, item) {
        return sum + item.price * item.quantity;
      }, 0);
    },

    totalPriceWithTax: function() {
      return Math.floor(this.totalPrice * 1.08);
    },
    canBuy: function() {
      return this.totalPrice >= 1000; //1000円以上から購入可能
    },
    errorMessageStyle: function() {
      //canBuy が偽のときに赤く表示する
      return {
        border: this.canBuy ? "" : "1px solid red",
        color: this.canBuy ? "" : "red"
      };
    }
  }
});
window.vm = vm;
