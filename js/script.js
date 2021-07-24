var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

$.getJSON('data/topCustomer.json', function (Topcustomers) {
  // JSON result in `data` variable
  let customer = Topcustomers.data;
  $.each(customer, function (i, Topcustomers) {
    $('#topCostumer').append('<tr><td> ' + i + '  </td><td>' + Topcustomers.customer_name + '</td><td>' + Topcustomers.year_id + '</td><td>' + formatter.format(Topcustomers.total_buy) + '</td></tr>');
  });
});

$.getJSON('data/topProduct.json', function (productTerlaris) {
  // JSON result in `data` variable
  let topProduct = productTerlaris.data;
  $.each(topProduct, function (i, productTerlaris) {
    $('#productTerlaris').append('<tr><td class="text-center">' + productTerlaris.year_id + '</td><td class="text-left">' + productTerlaris.product_name + '</td><td class="text-center">' + productTerlaris.total_sold + '</td></tr>');
  });
});

$.getJSON('data/worstProduct.json', function (productKurangLaris) {
  // JSON result in `data` variable
  let worstProduct = productKurangLaris.data;
  $.each(worstProduct, function (i, productKurangLaris) {
    $('#productKurangLaris').append(
      '<tr><td class="text-center">' + productKurangLaris.year_id + '</td><td class="text-left">' + productKurangLaris.product_name + '</td><td class="text-center">' + productKurangLaris.total_sold + '</td></tr>'
    );
  });
});

$.getJSON('data/orderKondisi.json', function (order) {
  // JSON result in `data` variable
  let order1 = order.data;
  let total_sales = 0;
  $.each(order1, function (i, order) {
    $('#order').append(
      '<tr><td class="text-center col-2">' +
        order.order_id +
        '</td><td class="text-left col-6">' +
        order.product_name +
        '</td><td class="text-center col-2">' +
        order.date +
        '</td><td class="text-end col-2 pe-3">' +
        formatter.format(order.sales) +
        '</td></tr>'
    );
  });
});

$.getJSON('data/pendapatan.json', function (pendapatan) {
  // JSON result in `data` variable
  let pendapatan1 = pendapatan.data;

  $.each(pendapatan1, function (i, pendapatan) {
    $('#pendapatan').append(
      '<tr><td class="text-center col-2">' + pendapatan.year_id + '</td><td class="text-left col-6">' + pendapatan.region + '</td><td class="text-center col-2">' + formatter.format(pendapatan.total_sales) + '</td></tr>'
    );
  });
});

$('.region').on('click', function () {
  $('.region').removeClass('active');
  $(this).addClass('active');

  let region = $(this).html();

  $.getJSON('data/pendapatan.json', function (pendapatan) {
    let pendapatan1 = pendapatan.data;
    let content = '';

    $.each(pendapatan1, function (i, pendapatan) {
      if (pendapatan.region == region) {
        content += '<tr><td class="text-center col-2">' + pendapatan.year_id + '</td><td class="text-left col-6">' + pendapatan.region + '</td><td class="text-center col-2">' + formatter.format(pendapatan.total_sales) + '</td></tr>';
      }
      $('#pendapatan').html(content);
    });
  });
});

$.getJSON('data/order.json', function (daftarOrder) {
  // JSON result in `data` variable
  let daftarOrder1 = daftarOrder.data;
  let total_sales = 0;
  $.each(daftarOrder1, function (i, daftarOrder) {
    $('#daftarOrder').append(
      '<tr><td class="text-center col-2">' +
        daftarOrder.order_id +
        '</td><td class="text-left col-5">' +
        daftarOrder.product_name +
        '</td><td class="text-center col-1 ">' +
        daftarOrder.region +
        '</td><td class="text-center col-2">' +
        daftarOrder.date +
        '</td><td class="text-end col-2 pe-3">' +
        formatter.format(daftarOrder.sales) +
        '</td></tr>'
    );
  });
});

$('.daftarRegion').on('click', function () {
  $('.daftarRegion').removeClass('active');
  $(this).addClass('active');

  let daftarRegion = $(this).html();
  console.log(daftarRegion);

  $.getJSON('data/order.json', function (daftarOrder) {
    let daftarOrder1 = daftarOrder.data;
    let content = '';

    $.each(daftarOrder1, function (i, daftarOrder) {
      if (daftarOrder.region == daftarRegion) {
        content +=
          '<tr><td class="text-center col-2">' +
          daftarOrder.order_id +
          '</td><td class="text-left col-5">' +
          daftarOrder.product_name +
          '</td><td class="text-center col-1 ">' +
          daftarOrder.region +
          '</td><td class="text-center col-2">' +
          daftarOrder.date +
          '</td><td class="text-left col-2 pe-3">' +
          formatter.format(daftarOrder.sales) +
          '</td></tr>';
      }
      $('#daftarOrder').html(content);
    });
  });
});
