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
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

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
import { NewsContentLearnComponent } from './virtuallearning/news-content-learn/news-content-learn.component';
import { InnovaticComponent } from './innovatic/innovatic.component';
import { BicentenaryComponent } from './bicentenary/bicentenary.component';
import { CulturalsiteComponent } from './bicentenary/culturalsite/culturalsite.component';
import { LibraryComponent } from './bicentenary/library/library.component';
import { CuriositiesComponent } from './bicentenary/curiosities/curiosities.component';

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
        NewsContentLearnComponent,
        InnovaticComponent,
        BicentenaryComponent,
        CulturalsiteComponent,
        LibraryComponent,
        CuriositiesComponent,
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
        MatCardModule,
        MatButtonModule,
        MatDialogModule,
    ],
    exports:[ ComponentsComponent ],
    entryComponents: [ContentsComponent,],
})
export class ComponentsModule { }
