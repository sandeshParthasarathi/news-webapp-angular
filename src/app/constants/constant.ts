import { ACCOUNT_SETTINGS, BOOKMARK, DASHBOARD, FAVOURITE, HELLP, PERSONALIZE, SEARCH } from "./url";

export const permissions: Array<any> = [
    {
      name: 'Personalise Feed',
      icon: 'add',
      imgUrl: '../../../../assets/images/side-bar/add-white.svg',
      function: 'personaliseFeed()',
      route: PERSONALIZE
    },
    {
      name: 'Home',
      icon: 'dashboard',
      imgUrl: '../../../../assets/images/side-bar/home-white.svg',
      function: 'dashboard()',
      route: DASHBOARD
    },
    {
      name: 'Search',
      icon: 'search',
      imgUrl: '../../../../assets/images/side-bar/search-white.svg',
      function: 'searchFeed()',
      route: SEARCH
    },
    {
      name: 'Bookmark Feed',
      icon: 'bookmark',
      imgUrl: '../../../../assets/images/side-bar/bookmark-white.svg',
      function: 'bookmarkFeed()',
      route: BOOKMARK
    },
    {
      name: 'Favourite feed',
      icon: 'favourite',
      imgUrl: '../../../../assets/images/side-bar/favorite-white.svg',
      function: 'favouriteFeed()',
      route: FAVOURITE
    },
    {
      name: 'Help',
      icon: 'help',
      imgUrl: '../../../../assets/images/side-bar/help_outline-white.svg',
      function: 'help()',
      route: HELLP
    },
    // {
    //   name: 'Account Setting',
    //   icon: 'settings',
    //   imgUrl: '../../../../assets/images/side-bar/manage_accounts-white.svg',
    //   function: 'accountSettings()',
    //   route: ACCOUNT_SETTINGS
    // }
]