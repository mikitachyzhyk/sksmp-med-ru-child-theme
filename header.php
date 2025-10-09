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
		<button class="lch-header__menu-toggle js-header-burger"></button>

		<a href="<?php echo get_home_url(); ?>" class="lch-header__logo">
			<img src="<?php echo get_stylesheet_directory_uri(); ?>/logo.png">
			<span>СКСМП</span>
		</a>

		<div class="lch-header__nav-wrap js-header-nav">
			<div class="lch-header__nav-wrap-top">
				<button class="lch-header__menu-toggle js-header-close"></button>

				<a href="<?php echo get_home_url(); ?>" class="lch-header__logo">
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/logo.png">
					<span>СКСМП</span>
				</a>

				<a href="tel:+74959608303" class="lch-header__phone">+7 495 960 83 03</a>
			</div>

			<?php wp_nav_menu(array(
				'theme_location' => 'primary',
				'menu_class' => 'lch-header__nav',
				'container' => 'ul',
				'fallback_cb' => false,
				'depth' => 2
			)); ?>

			<a href="tel:+74959608303" class="lch-header__phone">+7 495 960 83 03</a>

			<button class="lch-header__search-toggle">
			</button>

			<div class="lch-header__search-form">
				<?php get_search_form(); ?>
			</div>
		</div>

		<a href="tel:+74959608303" class="lch-header__phone">+7 495 960 83 03</a>

	</header>