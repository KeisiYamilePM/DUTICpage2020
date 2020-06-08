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

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalBasic } from './modal/modal.component';
import { TvunsaComponent } from './workshopOnline/tvunsa/tvunsa.component';
import { VideoconferencesComponent } from './workshopOnline/videoconferences/videoconferences.component';
import { TeachersComponent } from './videosresources/teachers/teachers.component';
import { StudentsComponent } from './videosresources/students/students.component';
import { ToolsgoogleComponent } from './videosresources/toolsgoogle/toolsgoogle.component';
import { NewsComponent } from './virtualteaching/news/news.component';
import { SubjectDesignComponent } from './virtualteaching/subject-design/subject-design.component';


@NgModule({
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalBasic,
        TvunsaComponent,
        VideoconferencesComponent,
        TeachersComponent,
        StudentsComponent,
        ToolsgoogleComponent,
        NewsComponent,
        SubjectDesignComponent
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
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
