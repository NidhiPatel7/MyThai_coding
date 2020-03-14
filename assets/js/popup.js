// pop up for items

document.getElementById('popup').addEventListener('click',function()
{

	document.querySelector('.bg-modal').style.display = 'flex';

});

document.querySelector('.close').addEventListener('click',function()
{
	document.querySelector('.bg-modal').style.display = 'none';
});

document.querySelector('.button_product').addEventListener('click',function()
{
	document.querySelector('.bg-modal').style.display = 'none';
	document.querySelector('.round_lable').style.display = 'flex';
});

//popup
	// $('.tab_content').on('click',function(){
	// 	$('.bg-modal').fadeIn();
	// });

	// $('.bg-modal').on('click',function(){
	// 	$('.bg-modal').fadeOut();
	// });

// popup for cart
document.getElementById('cart').addEventListener('click',function()
{

	document.querySelector('.bg-modal-cart').style.display = 'flex';

});

document.querySelector('.close_cart').addEventListener('click',function()
{
	document.querySelector('.bg-modal-cart').style.display = 'none';
});
// if click on cancle button
document.querySelector('.cancle').addEventListener('click',function()
{
	document.querySelector('.bg-modal-cart').style.display = 'none';
});
// if click on Submit_Order button
document.querySelector('.Submit_Order').addEventListener('click',function()
{
	document.querySelector('.bg-modal-order-reg').style.display = 'flex';
	document.querySelector('.bg-modal-cart').style.display = 'none';
});
// if click on reg page cancle button
document.querySelector('.close_order_reg').addEventListener('click',function()
{
	document.querySelector('.bg-modal-order-reg').style.display = 'none';
});

document.querySelector('.button_form_reg').addEventListener('click',function()
{
	document.querySelector('.bg-modal-order-payment').style.display = 'flex';
	document.querySelector('.bg-modal-order-reg').style.display = 'none';
});

// if click on payment cancle button and process button
document.querySelector('.button_form_payment').addEventListener('click',function()
{
	document.querySelector('.bg-modal-order-payment').style.display = 'none';
});
// if click on reg page cancle button
document.querySelector('.close_order_payment').addEventListener('click',function()
{
	document.querySelector('.bg-modal-order-payment').style.display = 'none';
});




