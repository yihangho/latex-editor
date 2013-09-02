<?php
if (array_key_exists("html", $_GET) && $_GET["html"] = true)
	header("Content-Type: text/plain");
$data = json_decode(file_get_contents("data.json"), true);

foreach($data as $d):
	if ($d["type"] == "button"):
?>
	<li><a href="#" <?php if (array_key_exists("latex_code", $d)):?>class="insert-latex" data-latex-code="<?php echo $d["latex_code"];?>"<?php endif;?> <?php if (array_key_exists("caret_start_offset", $d)):?>data-caret-start-offset="<?php echo $d["caret_start_offset"];?>"<?php endif;?> <?php if (array_key_exists("caret_end_offset", $d)):?>data-caret-end-offset="<?php echo $d["caret_end_offset"];?>"<?php endif;?>><?php echo $d["label"];?></a></li>
<?php elseif ($d["type"] == "category"):?>
	<?php $first = true;?>
	<li class="dropdown">
		<a href="#" class="dropdown-toggle" data-toggle="dropdown"><?php echo $d["label"];?> <b class="caret"></b></a>
		<ul class="dropdown-menu">
			<?php foreach($d["members"] as $e):?>
				<?php if ($e["type"] == "button"):?>
					<li><a href="#" <?php if (array_key_exists("latex_code", $e)):?>class="insert-latex" data-latex-code="<?php echo $e["latex_code"];?>"<?php endif;?> <?php if (array_key_exists("caret_start_offset", $e)):?>data-caret-start-offset="<?php echo $e["caret_start_offset"];?>"<?php endif;?> <?php if (array_key_exists("caret_end_offset", $e)):?>data-caret-end-offset="<?php echo $e["caret_end_offset"];?>"<?php endif;?>><?php echo $e["label"];?></a></li>
				<?php elseif ($e["type"] == "label"):?>
					<?php if (!$first  || (array_key_exists("divider", $e) && $e["divider"] == "true")):?>
						<li role="presentation" class="divider"></li>
					<?php else:?>
						<?php $first = false;?>
					<?php endif;?>
					<li role="presentation" class="dropdown-header"><?php echo $e["label"];?></li>
				<?php endif;?>
			<?php endforeach;?>
		</ul>
	</li>
<?php endif;?>
<?php endforeach;?>
