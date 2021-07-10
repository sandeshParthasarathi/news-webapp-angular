import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {

  constructor() { }

  isHover: boolean = false;

  filterItem = [
    {
      type: 'Politics',
      isActive: true
    },
    {
      type: 'Technology',
      isActive: false
    },
    {
      type: 'Finance',
      isActive: false
    },
    {
      type: 'Design',
      isActive: false
    }  
  ]

  newsAction = [
    {
      name: 'More Action',
      icon: 'more',
      imgUrl: '../../../../assets/images/more_vert-black.svg',
      function: 'mmoreAction()',
    },
    {
      name: 'Bookmark',
      icon: 'bookmark',
      imgUrl: '../../../../assets/images/blue-primary/KnolCom-Web-Icons_Primary-Blue_Active_Read-Later.svg',
      function: 'bookmarkFeed()',
    },
    {
      name: 'Save',
      icon: 'favourite',
      imgUrl: '../../../../assets/images/blue-primary/KnolCom-Web-Icons_Primary-Blue_Active_Like.svg',
      function: 'favouriteFeed()',
    },
    {
      name: 'Close',
      icon: 'close',
      imgUrl: '../../../../assets/images/blue-primary/KnolCom-Web-Icons_Primary-Blue__Close.svg',
      function: 'closeFeed()',
    },
  ]

  ngOnInit(): void {
  }

  filterFeed(topic): void {
    console.log(topic)
    this.filterItem.forEach(el => {
      el.isActive = false;
    });
    topic.isActive = true;
  }

}
