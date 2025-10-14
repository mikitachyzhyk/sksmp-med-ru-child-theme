<?php

// Подключаем стили родительской темы
add_filter('stylesheet_uri', 'force_parent_theme_stylesheet_uri');
function force_parent_theme_stylesheet_uri($uri)
{
  // Получаем объект главной темы
  $parent_theme = wp_get_theme(get_template());
  // Возвращаем URI файла style.css главной темы
  return $parent_theme->get_stylesheet_directory_uri() . '/style.css';
}


/**
 * Enqueues a CSS stylesheet with file modification time as $ver.
 *
 * @link https://wordpress.stackexchange.com/a/269740/153313
 */
function enqueueStyleWithFileMTime(
  $handle,
  $src = '',
  $deps = array(),
  $media = 'all'
) {
  $uri = get_theme_file_uri($src);
  $ver = filemtime(get_theme_file_path($src));
  wp_enqueue_style($handle, $uri, $deps, $ver, $media);
}

/**
 * Enqueues a script with file modification time as $ver.
 *
 * @link https://wordpress.stackexchange.com/a/269740/153313
 */
function enqueueScriptWithFileMTime(
  $handle,
  $src = '',
  $deps = array(),
  $args = array()
) {
  $uri = get_theme_file_uri($src);
  $ver = filemtime(get_theme_file_path($src));
  wp_enqueue_script($handle, $uri, $deps, $ver, $args);
}

add_action('wp_enqueue_scripts', function () {
  enqueueStyleWithFileMTime('lekar-child-style', 'style.css');
  enqueueScriptWithFileMTime('lekar-child-script', 'script.js', [], true);
});

/**
 * Format numbered phone.
 *
 * @param int $phone Phone number.
 * @return string
 */
function formatPhone($phone)
{
  return preg_replace('/(?:\G|^)[+\d]*\K[^:+\d]/m', '', $phone);
}
