var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

$.getJSON('data/order.json', function (order) {
  // JSON result in `data` variable
  let order1 = order.data;
  let total_sales = 0;
  $.each(order1, function (i, order) {
    $('#order').append(
      '<tr><td class="text-center col-2">' +
        order.order_id +
        '</td><td class="text-left col-5">' +
        order.product_name +
        '</td><td class="text-center col-1 ">' +
        order.region +
        '</td><td class="text-center col-2">' +
        order.date +
        '</td><td class="text-end col-2 pe-3">' +
        formatter.format(order.sales) +
        '</td></tr>'
    );
  });
});

$('.region').on('click', function () {
  $('.region').removeClass('active');
  $(this).addClass('active');

  let region = $(this).html();
  // console.log(region);

  $.getJSON('data/order.json', function (order) {
    let order1 = order.data;
    let content = '';

    $.each(order1, function (i, order) {
      if (order.region == region) {
        content +=
          '<tr><td class="text-center col-2">' +
          order.order_id +
          '</td><td class="text-left col-5">' +
          order.product_name +
          '</td><td class="text-center col-1 ">' +
          order.region +
          '</td><td class="text-center col-2">' +
          order.date +
          '</td><td class="text-end col-2 pe-3">' +
          formatter.format(order.sales) +
          '</td></tr>';
      }
      $('#order').html(content);
    });
  });
});
