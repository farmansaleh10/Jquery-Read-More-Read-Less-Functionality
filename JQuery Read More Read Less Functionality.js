<script>
  $(document).ready(function(){
    	readMoreNotificationDesc();
  });
  function readMoreNotificationDesc() 
{
	var maxLength = 150;
	$("#noti_desc1").each(function()
	{
		var myStr = $(this).text();
        if($.trim(myStr).length > maxLength)
        {
            var newStr = myStr.substring(0, maxLength);
            var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
            $(this).empty().html(newStr);
            $(this).append('<span class="more-text d-none">' + removedStr + '</span>');
            $(this).append(' <a href="#" style="text-decoration:none;" class="btn-text text-primary" onclick="toggleReadMore()"> Read more...</a>');
        }
    });
}
function toggleReadMore() 
{
	var btnText = $(".btn-text").text();
	
	$(".more-text").toggleClass("d-none");
	if(btnText == " Read more..." && btnText != "")
	{
		$(".btn-text").text(" Read less...");
	}
	else if(btnText == " Read less..." && btnText != "")
	{
		$(".btn-text").text(" Read more...");
	}
}
</script>