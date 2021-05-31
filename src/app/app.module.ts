import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CourseService } from './course-service.service';
import { CoursesComponent } from './courses/courses.component';
import { StarComponent } from './star/star.component';
import { TitleCaseInputComponent } from './title-case-input/title-case-input.component';
import { TitleCasePipePipe } from './title-case-pipe.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { TestFormComponent } from './test-form/test-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, CoursesComponent, StarComponent, TitleCaseInputComponent, TitleCasePipePipe, LikeComponent, ZippyComponent, TestFormComponent, RegistrationFormComponent],
  bootstrap: [AppComponent],
  providers: [CourseService]
})
export class AppModule {}
