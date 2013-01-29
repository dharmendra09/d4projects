<?php

print render($page['content']); 
if(isset($_SERVER['HTTP_REFERER'])) {
  $browser_path = $_SERVER['HTTP_REFERER'];
  $path_params = parse_url($_SERVER['HTTP_REFERER']);
  $arg_path = $path_params['path'];
  $user_id = substr($arg_path,15);
  $parts = explode("/",$user_id);
  $final_id = $parts['0'];
  $username_url = $user->name;
   
}
?>
<script language = "javascript">
   $("#edit-field-referenced-user-und option[value='" + <?php echo $final_id; ?> + "']").attr("selected", "selected");
</script>
 
