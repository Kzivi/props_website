<?php
// Tutaj możesz umieścić tłumaczenia
$lang = $_GET['lang'];
switch ($lang) {
  case 'pl':
    echo json_encode(array(
      'home' => 'Strona główna',
      'about' => 'O nas',
      'services' => 'Usługi',
      'portfolio' => 'Portfolio',
      'contact' => 'Kontakt',
    ));
    break;
  case 'en':
    echo json_encode(array(
      'home' => 'Home',
      'about' => 'About Us',
      'services' => 'Services',
      'portfolio' => 'Portfolio',
      'contact' => 'Contact',
    ));
    break;
  default:
    break;
}
?>