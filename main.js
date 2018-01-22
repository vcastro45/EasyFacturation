function formatDate(dateObj) {
	return (("0" + dateObj.getUTCDate()).slice(-2) + "/" + ("0" + (dateObj.getUTCMonth() + 1)).slice(-2) + "/" + dateObj.getUTCFullYear());
}

function updateAmount(tr) {
	let quantity = parseFloat(tr.find('.quantity').val());
	let unitprice = parseFloat(tr.find('.unitprice').val());

	tr.find('.amount').text(quantity * unitprice);
}

function updateTotal(table) {
	let total = 0;
	$.each(table.find('.amount'), function(key, val) {
		total += parseFloat($(val).text());
	});
	total -= parseFloat($('#alreadyPaid').val());
	table.find('#total').val(total);
}

$(document).ready(function(){
	$('#societyName').val(society.name);
	$('#societyTel').val(society.tel);
	$('#societyAddress').val(society.address);
	$('#societyZipcode').val(society.zipcode);
	$('#societyCity').val(society.city);
	$('#societyCountry').val(society.county);
	$('#societySiret').val(society.siret);

	var now = new Date();
	var nextMonth = new Date();
	nextMonth.setMonth(now.getMonth() + 1);

	$('#billDate').val(formatDate(now));
	$('#billDeadline').val(formatDate(nextMonth));

	$('.quantity').change(function(){
		updateAmount($(this).closest('tr'));
		updateTotal($(this).closest('table'));
	});

	$('.unitprice').change(function(){
		updateAmount($(this).closest('tr'));
		updateTotal($(this).closest('table'));
	});

	$('#alreadyPaid').change(function(){
		updateTotal($(this).closest('table'));
	});
});