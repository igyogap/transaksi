// $.ajax({
//   type: 'GET',
//   url: 'https://api-test.godig1tal.com/product/all_product',
//   data: {},
//   success: function (result) {
//     var json = JSON.parse(result);
//     console.log(json);
//   },
// });

$.getJSON('data/product.json', function (product) {
  // JSON result in `data` variable
  let product1 = product.data;

  $.each(product1, function (i, product) {
    $('#product').append('<option value="' + product.product_id + '">' + product.product_name + '</option>');
  });
});

var staticUrl = 'https://api-test.godig1tal.com/customer/all_customer';
$.getJSON(staticUrl, function (name) {
  let nama = name.data;
  // console.log(name);

  $.each(nama, function (i, name) {
    $('#name').append('<option value="' + name.customer_id + '">' + name.customer_name + '</option>');
  });
});

let data = [];

const addTransaksi = (ev) => {
  ev.preventDefault(); //to stop the form submitting
  let transaksi = {
    order_id: Date.now(),
    customer_id: document.getElementById('name').value,
    region: document.getElementById('region').value,
    product_id: document.getElementById('product').value,
    date: new Date().toDateString(),
    sales: document.getElementById('sales').value,
  };
  data.push(transaksi);
  document.forms[0].reset(); // to clear the form for the next entries

  //for display purposes only
  console.warn('added', { data });

  //saving to localStorage
  var tambah_data = 'https://api-test.godig1tal.com/order/new_order';
  localStorage.setItem('data', JSON.stringify(data));
};
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', addTransaksi);
});
