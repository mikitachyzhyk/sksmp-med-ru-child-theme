<?php if (get_field('site_logo', 'option') && get_field('header_logo_text', 'option')) : ?>
  <a href="<?php echo get_home_url(); ?>" class="lch-header__logo">
    <?php if (get_field('site_logo', 'option')) : ?>
      <img
        src="<?php echo esc_url(get_field('site_logo', 'option')['url']); ?>"
        alt="<?php echo esc_attr(get_field('site_logo', 'option')['alt']); ?>">
    <?php endif; ?>

    <?php if (get_field('header_logo_text', 'option')) : ?>
      <span>
        <?php echo esc_html(get_field('header_logo_text', 'option')); ?>
      </span>
    <?php endif; ?>
  </a>
<?php endif; ?>