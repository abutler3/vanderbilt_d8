<?php

/**
 * @file
 * Functions to set up settings for theme.
 */

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function vanderbilt_d8_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface &$form_state, $form_id = NULL) {
  // Hide the littany of checkboxes that do nothing in this theme
  $form['theme_settings']["#access"] = FALSE;
  $form['logo']["#access"] = FALSE;
  $form['favicon']["#access"] = FALSE;

  $form['theme_settings'] = array(
    '#type' => 'fieldset',
    '#title' => t('Theme Settings'),
  );
  $form['theme_settings']['related_sites'] = array(
    '#type' => 'fieldset',
    '#title' => t('Related Sites'),
  );
  $form['theme_settings']['related_sites']['parent_entity'] = array(
    '#type' => 'fieldset',
    '#title' => t('Parent Department / Division / etc.'),
    '#description' => t('A link to this Department will be automatically added below your site title.'),
  );
  $form['theme_settings']['related_sites']['parent_entity']['parent_entity_name'] = array(
    '#type' => 'textfield',
    '#title' => 'Name (e.g., Department of Biochemistry)',
    '#default_value' => theme_get_setting("parent_entity_name"),
  );
  $form['theme_settings']['related_sites']['parent_entity']['parent_entity_link'] = array(
    '#type' => 'textfield',
    '#title' => 'Web Address',
    '#description' => '(include the http://)',
    '#default_value' => theme_get_setting("parent_entity_link"),
  );
  $form['theme_settings']['related_sites']['parent_entity']['parent2_entity'] = array(
    '#type' => 'details',
    '#title' => t('Additional Parent Department / Division / etc.'),
    '#open' => TRUE,
  );
  $form['theme_settings']['related_sites']['parent_entity']['parent2_entity']['parent2_entity_name'] = array(
    '#type' => 'textfield',
    '#title' => 'Name (e.g., Department of Biochemistry)',
    '#default_value' => theme_get_setting("parent2_entity_name"),
  );
  $form['theme_settings']['related_sites']['parent_entity']['parent2_entity']['parent2_entity_link'] = array(
    '#type' => 'textfield',
    '#title' => 'Web Address',
    '#description' => '(include the http://)',
    '#default_value' => theme_get_setting("parent2_entity_link"),
  );
  $scale_options = [
    "100%" => "100%",
    "95%" => "95%",
    "90%" => "90%",
    "85%" => "85%",
    "80%" => "80%",
    "75%" => "75%",
    "70%" => "70%",
    "65%" => "65%",
  ];
  $form['theme_settings']['header_scale_factor'] = array(
    '#type' => 'select',
    '#title' => 'Reduce site title size',
    '#description' => 'If your site title wraps even at large screen sizes, you can adjust the size here. (Almost all site titles will wrap at small screen sizes.)',
    '#options' => $scale_options,
    '#default_value' => theme_get_setting("header_scale_factor") ? theme_get_setting("header_scale_factor") : "100%",
  );
}
