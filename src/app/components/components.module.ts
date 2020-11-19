import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';

import { ComponentsComponent } from './components.component';
import { NgbdModalBasic } from './modal/modal.component';
import { VideoconferencesComponent } from './workshopOnline/videoconferences/videoconferences.component';
import { TeachersComponent } from './videosresources/teachers/teachers.component';
import { StudentsComponent } from './videosresources/students/students.component';
import { ToolsgoogleComponent } from './videosresources/toolsgoogle/toolsgoogle.component';
import { NewsComponent } from './virtualteaching/news/news.component';
import { SubjectDesignComponent } from './virtualteaching/subject-design/subject-design.component';
import { VirtuallearningComponent } from './virtuallearning/virtuallearning.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { ContentsComponent } from './trainings/contents/contents.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TrainingStudentsComponent } from './trainings/training-students/training-students.component';
import { NewsContentComponent } from './virtualteaching/news-content/news-content.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

@NgModule({
    declarations: [
        ComponentsComponent,
        NgbdModalBasic,
        VideoconferencesComponent,
        TeachersComponent,
        StudentsComponent,
        ToolsgoogleComponent,
        NewsComponent,
        SubjectDesignComponent,
        VirtuallearningComponent,
        TrainingsComponent,
        ContentsComponent,
        TrainingStudentsComponent,
        NewsContentComponent,
        NewsletterComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        MatTableModule,
		MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatTabsModule,
        MatDividerModule,
        MatDialogModule,
    ],
    exports:[ ComponentsComponent ],
    entryComponents: [ContentsComponent,],
})
export class ComponentsModule { }
