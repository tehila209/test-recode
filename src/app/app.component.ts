
@Pipe({ name: 'safeResourceUrl' })
export class SafeUrlPipe implements PipeTransform {
  constructor(private readonly sanitizer: DomSanitizer) {}

  public transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

import { Component, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgAudioRecorderService, OutputFormat } from 'ng-audio-recorder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  src:string|any
  constructor(private audioRecorderService: NgAudioRecorderService) {

    this.audioRecorderService.recorderError.subscribe({
      // Handle Error
    })
  }
  //outputFormat: OutputFormat = new OutputFormat();
  startRecording() {
    this.audioRecorderService.startRecording();
  }

  stopRecording() {
    //this.audioRecorderService.stopRecording()
    this.audioRecorderService.stopRecording(OutputFormat.WEBM_BLOB).then((output) => {
      console.log(output);
      this.src = output
      // do post output steps
    }).catch(errrorCase => {
      // Handle Error
    });
  }

  ngOnInit() {

  }
}


