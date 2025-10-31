<footer class="lch-footer">
  <div class="lch-footer__container">
    <div class="lch-footer__top">
      <div class="lch-footer__col">
        <?php if (get_field('site_logo', 'option') && get_field('footer_logo_text', 'option')) : ?>
          <a href="<?php echo get_home_url(); ?>" class="lch-footer__logo">
            <?php if (get_field('site_logo', 'option')) : ?>
              <img
                src="<?php echo esc_url(get_field('site_logo', 'option')['url']); ?>"
                alt="<?php echo esc_attr(get_field('site_logo', 'option')['alt']); ?>">
            <?php endif; ?>
            <?php if (get_field('footer_logo_text', 'option')) : ?>
              <span>
                <?php echo esc_html(get_field('footer_logo_text', 'option')); ?>
              </span>
            <?php endif; ?>
          </a>
        <?php endif; ?>

        <?php if (get_field('footer_btn_text', 'option')) : ?>
          <button class="lch-footer__btn" data-popup="#popup-ambulance">
            <?php echo esc_html(get_field('footer_btn_text', 'option')); ?>
          </button>
        <?php endif; ?>
      </div>
      <div class="lch-footer__col">
        <?php if (get_field('footer_nav_title', 'option')) : ?>
          <div class="lch-footer__heading">
            <?php echo esc_html(get_field('footer_nav_title', 'option')); ?>
          </div>
        <?php endif; ?>

        <?php wp_nav_menu(array(
          'theme_location' => 'footer',
          'menu_class' => 'lch-footer__nav',
          'container' => 'ul',
          'fallback_cb' => false,
          'depth' => 1
        )); ?>
      </div>
      <div class="lch-footer__col">
        <?php if (get_field('footer_phone', 'option')) : ?>
          <a href="tel:<?php echo formatPhone(esc_html(get_field('footer_phone', 'option'))); ?>" class="lch-footer__phone">
            <?php echo esc_html(get_field('footer_phone', 'option')); ?>
          </a>
        <?php endif; ?>

        <?php if (have_rows('footer_socials', 'option')) : ?>
          <?php while (have_rows('footer_socials', 'option')) : the_row(); ?>
            <div class="lch-footer__socials">
              <?php if (get_sub_field('btn_1')['link']) : ?>
                <a href="<?php echo esc_url(get_sub_field('btn_1')['link']); ?>" style="background-color: <?php echo esc_attr(get_sub_field('btn_1')['color']); ?>;">
                  <?php if (get_sub_field('btn_1')['text']) : ?>
                    <span>
                      <?php echo esc_html(get_sub_field('btn_1')['text']); ?>
                    </span>
                  <?php endif; ?>
                  <?php if (get_sub_field('btn_1')['img']) : ?>
                    <img
                      src="<?php echo esc_url(get_sub_field('btn_1')['img']['url']); ?>"
                      alt="<?php echo esc_attr(get_sub_field('btn_1')['img']['alt']); ?>">
                  <?php endif; ?>
                </a>
              <?php endif; ?>

              <?php if (get_sub_field('btn_2')['link']) : ?>
                <a href="<?php echo esc_url(get_sub_field('btn_2')['link']); ?>" style="background-color: <?php echo esc_attr(get_sub_field('btn_2')['color']); ?>;">
                  <?php if (get_sub_field('btn_2')['text']) : ?>
                    <span>
                      <?php echo esc_html(get_sub_field('btn_2')['text']); ?>
                    </span>
                  <?php endif; ?>
                  <?php if (get_sub_field('btn_2')['img']) : ?>
                    <img
                      src="<?php echo esc_url(get_sub_field('btn_2')['img']['url']); ?>"
                      alt="<?php echo esc_attr(get_sub_field('btn_2')['img']['alt']); ?>">
                  <?php endif; ?>
                </a>
              <?php endif; ?>
            </div>
          <?php endwhile; ?>
        <?php endif; ?>

        <?php if (have_rows('footer_contacts', 'option')) : ?>
          <div class="lch-footer__contacts">
            <table>
              <?php while (have_rows('footer_contacts', 'option')) : the_row(); ?>
                <tr>
                  <td>
                    <?php echo esc_html(get_sub_field('title')); ?>
                  </td>
                  <td>
                    <?php echo esc_html(get_sub_field('text')); ?>
                  </td>
                </tr>
              <?php endwhile; ?>
            </table>
          </div>
        <?php endif; ?>
      </div>
    </div>

    <div class="lch-footer__bottom">
      <?php if (get_field('footer_policy', 'option')) : ?>
        <a href="<?php echo esc_url(get_field('footer_policy', 'option')); ?>" class="lch-footer__policy">Политика конфиденциальности</a>
      <?php endif; ?>
      <?php if (get_field('footer_copy', 'option')) : ?>
        <div class="lch-footer__copy">
          <?php echo esc_html(get_field('footer_copy', 'option')); ?>
        </div>
      <?php endif; ?>
    </div>
  </div>
</footer>

<div class="popup" id="popup-ambulance">
  <div class="popup__wrap">
    <div class="popup__body">
      <div class="popup__inner">

        <?php if (get_field('popup_ambulance_title', 'option')) : ?>
          <div class="popup__title">
            <?php echo esc_html(get_field('popup_ambulance_title', 'option')); ?>
          </div>
        <?php endif; ?>

        <div class="popup__form">
          <?php echo do_shortcode('[contact-form-7 id="6407c29"]'); ?>
        </div>
      </div>

      <button class="popup__close" title="Закрыть"></button>
    </div>
    <div class="popup__close-overlay"></div>
  </div>
</div>

<div class="popup" id="popup-reanimation">
  <div class="popup__wrap">
    <div class="popup__body">
      <div class="popup__inner">

        <?php if (get_field('popup_reanimation_title', 'option')) : ?>
          <div class="popup__title">
            <?php echo esc_html(get_field('popup_reanimation_title', 'option')); ?>
          </div>
        <?php endif; ?>

        <div class="popup__form">
          <?php echo do_shortcode('[contact-form-7 id="211afca"]'); ?>
        </div>
      </div>

      <button class="popup__close" title="Закрыть"></button>
    </div>
    <div class="popup__close-overlay"></div>
  </div>
</div>

<div class="popup" id="popup-order">
  <div class="popup__wrap">
    <div class="popup__body">
      <div class="popup__inner">

        <?php if (get_field('popup_order_title', 'option')) : ?>
          <div class="popup__title">
            <?php echo esc_html(get_field('popup_order_title', 'option')); ?>
          </div>
        <?php endif; ?>

        <div class="popup__form">
          <?php echo do_shortcode('[contact-form-7 id="3af793e"]'); ?>
        </div>
      </div>

      <button class="popup__close" title="Закрыть"></button>
    </div>
    <div class="popup__close-overlay"></div>
  </div>
</div>

<?php wp_footer(); ?>

</body>

</html>