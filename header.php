<?php

/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package lekar
 */

?>
<!doctype html>
<html <?php language_attributes(); ?> class="no-js">

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php if (!function_exists('_wp_render_title_tag')) : ?>
		<title><?php echo wp_get_document_title(); ?></title>
	<?php endif; ?>
	<?php if (is_single() || is_page()) : ?>
		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
				<meta name="description" content="<?php echo esc_attr(wp_strip_all_tags(get_the_excerpt(), true)); ?>">
		<?php endwhile;
		endif; ?>
	<?php else : ?>
		<meta name="description" content="<?php echo esc_attr(get_bloginfo('description')); ?>">
	<?php endif; ?>

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>

	<header class="lch-header">
		<div class="lch-header__container">
			<button class="lch-header__menu-toggle js-header-burger"></button>

			<?php get_template_part('template-parts/header-logo'); ?>

			<div class="lch-header__nav-wrap js-header-nav">
				<div class="lch-header__nav-wrap-top">
					<button class="lch-header__menu-toggle js-header-close"></button>

					<?php get_template_part('template-parts/header-logo'); ?>

					<?php get_template_part('template-parts/header-phone'); ?>
				</div>

				<?php wp_nav_menu(array(
					'theme_location' => 'primary',
					'menu_class' => 'lch-header__nav',
					'container' => 'ul',
					'fallback_cb' => false,
					'depth' => 2
				)); ?>

				<?php get_template_part('template-parts/header-phone'); ?>

				<button class="lch-header__search-toggle">
				</button>

				<div class="lch-header__search-form">
					<?php get_search_form(); ?>
				</div>
			</div>

			<?php get_template_part('template-parts/header-phone'); ?>
		</div>
	</header>