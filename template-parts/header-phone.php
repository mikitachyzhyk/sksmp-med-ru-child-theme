<?php if (get_field('header_phone', 'option')) : ?>
  <a href="tel:<?php echo formatPhone(esc_html(get_field('header_phone', 'option'))); ?>" class="lch-header__phone">
    <?php echo esc_html(get_field('header_phone', 'option')); ?>
  </a>
<?php endif; ?>