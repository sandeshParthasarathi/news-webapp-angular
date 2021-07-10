import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personalise-feed',
  templateUrl: './personalise-feed.component.html',
  styleUrls: ['./personalise-feed.component.scss']
})
export class PersonaliseFeedComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }

  personaliseForm: FormGroup;
  personalisedTopics = [];

  ngOnInit(): void {
    this.personaliseForm = this.fb.group({
      topic: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup): void {
    if(form.controls.topic.value){
      const data ={
        name: form.controls.topic.value.trim()
      }
      if(data){
        this.personalisedTopics.push(data)
        this.isHover();
        this.personaliseForm.reset();
      }
    }
  }

  isHover(): void {
    this.personalisedTopics.map(item => item.isHover = false)
  }

  removeTopic(i): void{
    this.personalisedTopics.splice(i, 1);
  }

}
