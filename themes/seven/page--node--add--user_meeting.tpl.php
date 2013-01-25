<?php

print render($page['content']); 
if(isset($_SERVER['HTTP_REFERER'])) {
  $browser_path = $_SERVER['HTTP_REFERER'];
  $path_params = parse_url($_SERVER['HTTP_REFERER']);
  $arg_path = $path_params['path'];
  $user_id = substr($arg_path,6,2);
  $user = user_load($user_id);
  $username_url = $user->name;
     
}
//$user_name = $page['content']['system_main']['field_referenced_user']['und']['#options'][$user_id];

 ?>
	<script language = "javascript">
	  $("#edit-field-referenced-user-und option[value='" + <?php echo $user_id; ?> + "']").attr("selected", "selected");
	 </script>
 
