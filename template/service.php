<?php

/**
 * Template Name: Шаблон Услуги
 */

get_header(); ?>

<div id="content-area">
    <?php
    while (have_posts()) :
        the_post();
        the_content();
    endwhile;
    ?>
</div>

<?php
get_footer();
