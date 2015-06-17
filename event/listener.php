<?php

namespace iiet\hide_forums\event;

/**
* @ignore
*/
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
* Event listener
*/
class listener implements EventSubscriberInterface
{
  protected $template;
  /**
  * Constructor
  *
  * @param \phpbb\controller\helper    $helper        Controller helper object
  */
  public function __construct(\phpbb\template\template $template)
  {
    $this->template = $template;
  }

  static public function getSubscribedEvents()
  {
    return array(
      'core.page_header_after'  => 'page_header_after'
    );
  }

  public function page_header_after($event)
  {
    $this->template->assign_vars(array(
      'T_HIDE_FORUMS_ASSETS_PATH' => './ext/iiet/hide_forums/assets'
    ));
  }

}
